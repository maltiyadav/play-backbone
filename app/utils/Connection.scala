package utils

import com.mongodb.casbah.Imports._
import play.api.Play

object Connection {
    val mongoServer = Play.current.configuration.getString("mongoServer").get
    val mongoPort = Play.current.configuration.getString("mongoPort").get.toInt
    val databaseName = Play.current.configuration.getString("databaseName").get
    val dbUserName = Play.current.configuration.getString("dbUserName").get
    val dbUserPassword = Play.current.configuration.getString("dbUserPassword").get
    val mongoClient = MongoClient(mongoServer, mongoPort)
    val db = mongoClient(databaseName)
    val coll = db("user")
}