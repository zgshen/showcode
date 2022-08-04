package main

import (
	"encoding/json"
	"fmt"
	"showcode/app/model"
)

func main() {
	u := model.User{
		UserId:   1,
		Username: "Akari",
		City:     "Guangzhou",
		IsLock:   0,
	}

	j, _ := json.Marshal(u)
	fmt.Println(string(j))

	//app.Run()
}
