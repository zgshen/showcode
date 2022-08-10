package model

import (
	"showcode/config"
)

type (
	User struct {
		Model
		Username string `json:"username"`
		Password string `json:"password"`
	}
)

var db = config.DBConn

func (User) TableName() string {
	return "sc_user"
}

func Select(id int) User {
	var user User
	db.Raw("select * from sc_user where id=?", id).Scan(&user)

	if user == (User{}) {

	}
	return user
}

func SelectAll() []User {
	var users []User
	db.Find(&users)
	return users
}
