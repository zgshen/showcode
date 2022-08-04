package model

type (
	User struct {
		UserId   int64  `json:"user_id"`
		Username string `json:"username"`
		City     string `json:"city"`
		IsLock   int    `json:"is_lock"`
	}
)
