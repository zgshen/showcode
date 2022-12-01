package model

type (
	User struct {
		Model
		Username string `json:"username"`
		Password string `json:"password"`
	}
)

func (User) TableName() string {
	return "sc_user"
}

func Select(id int) User {
	var user User
	db.Raw("select * from sc_user where id=?", id).Scan(&user)
	return user
}

func SelectUser(username string, password string) User {
	var user User
	db.Raw("select * from sc_user where username=? and password=?", username, password).Scan(&user)
	return user
}

func SelectAll() []User {
	var users []User
	db.Find(&users)
	return users
}
