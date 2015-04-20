name := """play-backbone"""

version := "1.0-SNAPSHOT"

lazy val root = (project in file(".")).enablePlugins(PlayScala)

scalaVersion := "2.11.1"

libraryDependencies ++= Seq(
  jdbc,
  anorm,
  cache,
  ws
)

libraryDependencies ++= Seq(
  "org.webjars"    %%   "webjars-play"          % "2.3.0-2",
  "org.mongodb" 	%%   "casbah" 				% "2.8.0"
)

