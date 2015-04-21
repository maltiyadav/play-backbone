package model

import utils.Connection._
import com.mongodb.casbah.Imports._
import scala.collection.mutable.ListBuffer
import play.api.libs.json._

object User {

  def insert(data: MongoDBObject) = coll.insert(data)

  def fetch():String = {
    val resultList = coll.find().toList
    val json = "[%s]".format( coll.find().toList.mkString(","))
    json
  }
   
}