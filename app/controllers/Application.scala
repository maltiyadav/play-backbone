package controllers

import play.api._
import play.api.mvc._
import com.mongodb.casbah.Imports._
import play.api.libs.json._
import model._

object Application extends Controller {

  def index = Action {
    Ok(views.html.index("Your new application is ready."))
  }

  def createUser = Action { implicit request =>
    val name = request.body.asJson.get \ "name"
    val email = request.body.asJson.get \ "email"
    val data = MongoDBObject("name" -> name , "email" -> email)
    User.insert(data)
    Ok("")
  }
  
  def getUser = Action{ implicit request =>
    val result = User.fetch
    Ok(result).as("application/json")
  }

}