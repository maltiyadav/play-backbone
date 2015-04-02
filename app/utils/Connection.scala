package utils

import play.api.Play
import reactivemongo.api._
import scala.concurrent.ExecutionContext.Implicits.global
object Connection {
    val mongoServer = Play.current.configuration.getString("mongoServer").get
    val mongoPort = Play.current.configuration.getString("mongoPort").get.toInt
    val databaseName = Play.current.configuration.getString("databaseName").get
    val dbUserName = Play.current.configuration.getString("dbUserName").get
    val dbUserPassword = Play.current.configuration.getString("dbUserPassword").get
    // gets an instance of the driver
    // (creates an actor system)
    val driver = new MongoDriver
    val connection = driver.connection(List(mongoServer,dbUserName,dbUserPassword))
  
    // Gets a reference to the database "plugin"
    val db = connection(databaseName)
  
    // Gets a reference to the collection "acoll"
    // By default, you get a BSONCollection.
    val userColl = db("user")
}