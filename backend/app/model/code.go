package model

type (
	Code struct {
		Model
		Content string `json:"content"`
		Tag     string `json:"tag"`
	}
)
