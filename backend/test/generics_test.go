package test

import (
	"fmt"
	"testing"
)

func TestGenerics(t *testing.T) {
	u1 := User{
		12,
		"tom",
	}
	u2 := User{
		5.5,
		"jack",
	}
	//us := []User{u1, u2}

	sum := gSum([]User{u1, u2}, func(u User) float32 {
		return u.age
	})
	fmt.Println(sum)

	var users = []User{u1, u2}
	var f = func(u User) float32 {
		return u.age
	}
	u := gSum(users, f)
	fmt.Println(u)
}

type SumAble interface {
	~int | ~float32
}

func gSum[T any, U SumAble](arr []T, f func(T) U) U {
	var sum U
	for _, elem := range arr {
		sum = sum + f(elem)
	}
	return sum
}

type User struct {
	age  float32
	name string
}

func start(i interface {
	run()
}) {

}
func (User) run() {

}

func TestInterface(t *testing.T) {
	user := User{10, "tom"}
	start(user)
}
