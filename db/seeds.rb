# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Athlete.create({name: "Jay", school: "WJMS", jersey_number: 3, position: "Saftey", class_of: 2022, team: "Panthers"})
Athlete.create({name: "Odell", school: "Jackson High School", jersey_number: 13, position: "Wide Receiver", class_of: 2022, team: "Giants"})

Family.create({name: "Ford", relationship: "Mother", school: "WJMS", team: "Panthers"})
Family.create({name: "Ounce", relationship: "Father", school: "Gwinnett High School", team: "Cougars"})
