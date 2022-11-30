package model

import (
	"showcode/config"
)

type TimeStampUnix int64

type Model struct {
	ID        uint `json:"id"`
	CreatedAt int  `json:"created_at"`
	UpdatedAt int  `json:"updated_at"`
}

var db = config.DBConn
