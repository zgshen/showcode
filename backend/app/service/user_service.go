package service

import (
	"showcode/app/model"
)

func Get(id int) model.User {
	// business code
	user := model.Select(id)
	return user
}

func GetList() []model.User {
	return model.SelectAll()
}
