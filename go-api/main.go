// Optional contact endpoint for the Magan portfolio.
// Run with: go run ./go-api
// The frontend uses mailto by default; this server is an optional starting point.
package main

import (
	"encoding/json"
	"log"
	"net/http"
	"os"
	"strings"
	"time"
)

type message struct {
	Name    string `json:"name"`
	Email   string `json:"email"`
	Content string `json:"message"`
}

func main() {
	mux := http.NewServeMux()
	mux.HandleFunc("/health", func(w http.ResponseWriter, r *http.Request) {
		if r.Method != http.MethodGet {
			http.Error(w, "method not allowed", http.StatusMethodNotAllowed)
			return
		}
		w.Header().Set("Content-Type", "application/json")
		_ = json.NewEncoder(w).Encode(map[string]string{"status": "ok"})
	})
	mux.HandleFunc("/api/contact", func(w http.ResponseWriter, r *http.Request) {
		if r.Method != http.MethodPost {
			http.Error(w, "method not allowed", http.StatusMethodNotAllowed)
			return
		}
		r.Body = http.MaxBytesReader(w, r.Body, 16*1024)
		var input message
		if err := json.NewDecoder(r.Body).Decode(&input); err != nil {
			http.Error(w, "invalid request body", http.StatusBadRequest)
			return
		}
		input.Name = strings.TrimSpace(input.Name)
		input.Email = strings.TrimSpace(input.Email)
		input.Content = strings.TrimSpace(input.Content)
		if input.Name == "" || !strings.Contains(input.Email, "@") || len(input.Content) < 10 {
			http.Error(w, "name, valid email and a message of at least 10 characters are required", http.StatusBadRequest)
			return
		}
		// Deliberately do not log message contents or pretend to deliver email.
		log.Printf("contact request received at %s", time.Now().UTC().Format(time.RFC3339))
		w.Header().Set("Content-Type", "application/json")
		w.WriteHeader(http.StatusAccepted)
		_ = json.NewEncoder(w).Encode(map[string]string{"status": "received"})
	})
	port := os.Getenv("PORT")
	if port == "" {
		port = "8080"
	}
	log.Printf("contact starter listening on :%s", port)
	log.Fatal(http.ListenAndServe(":"+port, mux))
}