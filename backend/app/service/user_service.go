package service

import (
	"showcode/app/model"
)

func Get(id int) model.User {
	// business code
	user := model.Select(id)
	return user
}

func GetUser(username string, password string) model.User {
	user := model.SelectUser(username, password)
	return user
}

func GetList() []model.User {
	return model.SelectAll()
}
