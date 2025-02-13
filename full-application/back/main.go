package main

import (
	"net/http"

	"github.com/gin-gonic/gin"
)

type User struct {
	Id string
	Name string
	Dept string
	Email string
}

var Users []User

func main() {

	Users = append(Users, User{
		Id: "1",
		Name: "John Doe",
		Dept: "IT",
		Email: "user@gmail.com",
	})


	router := gin.Default()
	router.GET("/users", GetUsers)
	router.POST("/users", AddUsers)
	router.GET("/users/:id", FindUser)
	router.PUT("/users/:id", UpdateUser)
	router.DELETE("/users/:id", DeleteUser)

	router.Run(":8080")
}

func GetUsers(c *gin.Context) {
	c.JSON(http.StatusOK, Users)
}

func AddUsers(c *gin.Context){
	var userFromFrontend User
	c.ShouldBindJSON(&userFromFrontend)
	Users = append(Users, userFromFrontend)
	c.JSON(http.StatusCreated, userFromFrontend)
}

func FindUser(c *gin.Context){
	id := c.Param("id")

	for _, user := range Users {
		if user.Id == id {
			c.JSON(http.StatusOK, user)
			return
		}
	}
	c.JSON(http.StatusNotFound, gin.H{"message": "User not found"})
}

func UpdateUser(c *gin.Context){
	id := c.Param("id")

	var UpdatedUserfromFrontend User
	if err := c.ShouldBindJSON(&UpdatedUserfromFrontend); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"message": "Invalid request"})
		return
	}

	for i, user := range Users {
		if user.Id == id {
			Users[i] = UpdatedUserfromFrontend
			c.JSON(http.StatusOK, UpdatedUserfromFrontend)
			return
		}
	}
}

func DeleteUser(c *gin.Context){
	id := c.Param("id")

	for i, user := range Users {
		if user.Id == id {
			Users = append(Users[:i], Users[i+1])
			c.JSON(http.StatusOK, gin.H{"message": "User deleted"})
			return
		}
	}
	c.JSON(http.StatusNotFound, gin.H{"message": "User not found"})
}