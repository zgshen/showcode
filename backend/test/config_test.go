package test

import (
	"fmt"
	"testing"
)

type (
	Animal struct {
		Name string
		age  int
	}

	dog[A Animal] struct {
		species string
		ann     A
	}

	pig struct {
	}
)

func (p pig) DuckGo() {
	//TODO implement me
	panic("implement me")
}

type Duck interface {
	Quack()
	DuckGo()
}

func (p pig) Quack() {
	fmt.Println("pig duck eat")
}

func DoDuck(d Duck) {
	d.Quack()
	d.DuckGo()
}

func TestAbc(t *testing.T) {

	p := pig{}
	DoDuck(p)
	fmt.Println(123)

	d := dog[Animal]{"dog", Animal{"Tom", 3}}
	fmt.Println(d)

	animal := Animal{
		"hihi",
		10,
	}
	animal.run(12)
	animal.run("abc")
	animal.run(d)
}

func (a Animal) run(i interface{}) {
	fmt.Println(a.Name, i)
}

func use[a any]() {

}
