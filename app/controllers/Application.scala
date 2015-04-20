package controllers

import utils.Connection._
import play.api._
import play.api.mvc._

import com.mongodb.casbah.Imports._

object Application extends Controller {

  def index = Action {
    /*val a = MongoDBObject("hello" -> "world")
    coll.insert(a)*/
    Ok(views.html.index("Your new application is ready."))
  }
  
  def createUser = Action(parse.tolerantFormUrlEncoded){implicit request =>
    val name = request.body.get("name").map(_.head)
    println(name);
    Ok("arsgoisreg")
  }

}