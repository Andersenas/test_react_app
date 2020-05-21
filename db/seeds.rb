# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

streams = Stream.create([
                          { name: 'Lofi hip hop radio', url: 'https://www.youtube.com/watch?v=5qap5aO4i9A', type_platform: 'youtube', show: true },
                          { name: 'Good Life Radio', url: 'https://www.youtube.com/watch?v=36YnV9STBqc', type_platform: 'youtube', show: true },
                          { name: 'Deep House Radio', url: 'https://www.youtube.com/watch?v=wKOEl_vwPSo', type_platform: 'youtube', show: true },
                          { name: 'Olyashaa', url: 'https://www.twitch.tv/olyashaa', type_platform: 'twitch', show: true },
                          { name: 'Just_NS', url: 'https://www.twitch.tv/just_ns', type_platform: 'twitch', show: true },
                          { name: 'DreadzTV', url: 'https://www.twitch.tv/dreadztv', type_platform: 'twitch', show: true }
                        ])
