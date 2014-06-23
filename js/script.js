$(function () {
    $('#container').highcharts({
        chart: {
            zoomType: 'xy',
            type: 'area',

        },
         title: {

                text: null

            },

      
        xAxis: [{
                type: 'datetime',
                tickInterval: 10,
                title: {
                enabled: true,
                text: 'Year of Death'
            },
         
           labels: {
            format: '{value}'
        },
        gridLineWidth: 1,
         
            
        }],

        plotOptions: {
            spline: {
                marker: {
                    radius: 100,
                    symbol: "circle",
                    states: {
                        hover: {
                            enabled: true,
                           
                        }
                    }

                },
                
                tooltip: {
                    headerFormat: '<b>{series.name}</b><br>',
                 
                }
            },
        },
        yAxis: [{ // Primary yAxis

            labels: {
                format: null,
                style: {
                    color: Highcharts.getOptions().colors[2]
                }
            },

            title: {
                 text: null,
                style: {
                    color: Highcharts.getOptions().colors[2]
                }
            },
    
        }, 
{ 
            gridLineWidth: 1,
            title: {
            text: 'Age',
           
            },
        }],
        
        tooltip: {
            useHTML: true,

            formatter: function() {

               var markup = '<div class=" tooltip '+ this.series.name+ '">' +
               '<h3>' + this.point.name + '</h3>' +

                '<img class="photo" src="' + this.point.photo + '" title="" alt="" border="0" height="50" width="50">' +
                
                    // '<h2 class="profession">' + this.point.profession + '</h2><br>';
                    '<h4 class="profession">' + this.point.profession + '</h4>' + 
                    '<p class="bio">' +this.point.bio + '</p>' +
                    '<h4 class="age">Age:<span class="space"></span>' + this.point.y + '</h4>' +
                    '<h4 class="year">Year of Death:' + this.point.x + '</h4>' + 
                    '<a class="more btn btn-1 btn-1c" href= " '+ this.point.link +' " + target="_blank"> Read more </a>' +

                '</div>';


                return markup 

            },
            // valueDecimals: 2
        },
  
        // tooltip: {
        //     headerFormat: '<h2 class="name" style="color: blue;opacity:0;">{point.null}</h2>',
        //     pointFormat: '<div><h2 class="profession">{point.profession}</h2><br>' + 
        //     '<h2 class="profession">{point.profession}</h2>' +'<h3 class="name">{point.name}</h3>'+ '<br>' +'<h3>Age:{point.y} </h3> </div>',
        // },

        legend: {
            layout: 'horizontal',
            align: 'right',
            x: 0,
            verticalAlign: 'bottom',
            y: 20,
            floating: true,
            lineHeight: 10,
            symbolRadius: 100,
            backgroundColor: (Highcharts.theme && Highcharts.theme.legendBackgroundColor) || 'rgba(255,255,255,0)'
        },

  
        series: [{



//////////////////////////////// ALCOHOL      
          name: 'Alcohol',
          type: 'scatter', 
          lineWidth: 0,
          color: 'rgba(5, 219, 194,1)',
          yAxis: 1,
          marker: {
                      symbol: 'circle',
                      symbolRadius: 100,

                  },
          data: [{
                  name: 'George Best',
                  x: 2005,
                  y: 59,
                  profession: 'North Irish Footballer',
                  photo: "images/photos/best.jpg",
                  link: "http://en.wikipedia.org/wiki/George_Best",
                  marker: {
                      symbol: 'url(images/best-s.png)',

                  },
                   },
                  {
                  name: 'Hank Williams',
                  x: 1953,
                  y: 29,
                  profession: 'Pioneering Country Musician',
                  photo: "images/photos/williams.jpg",
                  link: "http://en.wikipedia.org/wiki/Hank_williams",
                  marker: {
                      symbol: 'url(images/Hank_Williams-s.png)',

                  },
              }, {
                  name: 'F. Scott Fitzgerald',
                  x: 1940,
                  y: 44,
                  profession: 'American Author',
                  photo: "images/photos/fitzgerald.jpg",
                  link: "http://en.wikipedia.org/wiki/F._Scott_Fitzgerald",
                  marker: {
                      symbol: 'url(images/F_Scott_Fitzgerald-s.png)',
                  }
                  }, {
                  name: 'Brendan Behan',
                  x: 1964,
                  y: 41,
                  profession: 'Irish Poet',
                  photo: "images/photos/behan.jpg",
                  link: "http://en.wikipedia.org/wiki/Brendan_Behan",
                  marker: {
                      symbol: 'url(images/brenden-behan-s.png)',
                  },
              },

              {
                  name: 'Billie Holiday',
                  x: 1959,
                  y: 44,
                  profession: 'American Jazz Singer',
                  photo: "images/photos/Holiday.jpg",
                  link: "http://en.wikipedia.org/wiki/Billie_Holliday",
                  marker: {
                      symbol: 'url(images/billie-s.png)',
                  },
              },


{
                  name: 'Bix Beiderbecke',
                  x: 1931,
                  y: 28,
                  profession: 'American Jazz Composer',
                  photo: "images/photos/Beiderbecke.jpg",
                  link: "http://en.wikipedia.org/wiki/Bix_Beiderbecke",
                  marker: {
                      symbol: 'url(images/bix-s.png)',
                  },
              },

                  {
                  name: 'Chögyam Trungpa',
                  x: 1987,
                  y: 48,
                  profession: 'Buddhist Meditation Master',
                  photo: "images/photos/trungpa.jpg",
                  link: "http://en.wikipedia.org/wiki/Ch%C3%B6gyam_Trungpa",
                  marker: {
                      symbol: 'url(images/c-trungpa-s.png)',
                  },
              },



              {
                  name: 'Dylan Thomas',
                  x: 1953,
                  y: 39,
                  profession: 'Welsh Poet and Writer',
                  photo: "images/photos/Thomas.jpg",
                  link: "http://en.wikipedia.org/wiki/Dylan_Thomas",
                  marker: {
                      symbol: 'url(images/d-thomas-s.png)'
                  },
              },
                  {
                  name: 'Daniel Webster',
                  x: 1852,
                  y: 70,
                  profession: 'American Senator from MA',
                  photo: "images/photos/Webster.jpg",
                  link: "http://en.wikipedia.org/wiki/Daniel_Webster",
                  marker: {
                      symbol: 'url(images/d-webster-s.png)',
                  },


                  }, {
                  name: 'Ed Delahanty',
                  x: 1903,
                  y: 35,
                  profession: 'MLB Hall of Famer',
                  photo: "images/photos/Delahanty.jpg",
                  link: "http://en.wikipedia.org/wiki/Ed_Delahanty",
                  marker: {
                      symbol: 'url(images/ed-delahanty-s.png)',

                  },

                  }, {
                  name: 'Errol Flynn',
                  x: 1959,
                  y: 50,
                  profession: 'Romantic Swashbuckler',
                  photo: "images/photos/Flynn.jpg",
                  link: "http://en.wikipedia.org/wiki/Errol_Flynn",
                  marker: {
                      symbol: 'url(images/errol-flynn-s.png)'
                  },

                  }, {
                  name: 'Ira Hayes',
                  x: 1955,
                  y:32,
                  profession: 'Native American WWII Marine',
                  photo: "images/photos/Hayes.jpg",
                  link: "http://en.wikipedia.org/wiki/Ira_Hayes",
                  marker: {
                      symbol: 'url(images/hayes-s.png)'
                  },

                  }, {
                  name: 'Amy Winehouse',
                  x: 2011,
                  y:27,
                  profession: 'English Singer/Songwriter',
                  photo: "images/photos/Winehouse.jpg",
                  link: "http://en.wikipedia.org/wiki/Amy_Winehouse",
                  marker: {
                      symbol: 'url(images/winehouse-s.png)'
                  },

                  }, {
                  name: 'Darren Millane',
                  x: 1991,
                  y:26,
                  profession: 'Aussie Rules Football Player',
                  photo: "images/photos/Millane.jpg",
                  link: "http://en.wikipedia.org/wiki/Darren_Millane",
                  marker: {
                      symbol: 'url(images/Millane-s.png)'
                  },

                  }, {
                  name: 'Dorothy Kilgallen',
                  x: 1965,
                  y:52,
                  profession: 'Journalist, Game Show Panelist',
                  photo: "images/photos/Kilgallen.jpg",
                  link: "http://en.wikipedia.org/wiki/Dorothy_Kilgallen",
                  marker: {
                      symbol: 'url(images/Kilgallen-s.png)'
                  },

                  }, {
                  name: 'Edie Sedgwick',
                  x: 1971,
                  y:28,
                  profession: 'American Actress, Model',
                  photo: "images/photos/Sedgwick.jpg",
                  link: "http://en.wikipedia.org/wiki/Edie_Sedgwick",
                  marker: {
                      symbol: 'url(images/Sedgwick-s.png)'
                  },

                  }, {
                  name: 'Jean Seberg',
                  x: 1979,
                  y: 40,
                  profession: "Lead Actress in Breathless",
                  photo: "images/photos/Seberg.jpg",
                  link: "http://en.wikipedia.org/wiki/Jean_Seberg",
                  marker: {
                      symbol: 'url(images/Seberg-s.png)'
                  },
                    }, {
                  name: 'Jeanne Eagels',
                  x: 1929,
                  y: 39,
                  profession: 'Zeigfeld Girl, Broadway Star',
                  photo: "images/photos/Eagels.jpg",
                  link: "http://en.wikipedia.org/wiki/Jeanne_Eagels",
                  marker: {
                      symbol: 'url(images/Eagels-s.png)',

                  },

                  }, {
                  name: 'John Cassavetes',
                  x: 1989,
                  y: 59,
                  profession: 'Pioneer of Independent Film',
                  photo: "images/photos/Cassavetes.jpg",
                  link: "http://en.wikipedia.org/wiki/John_Cassavetes",
                  marker: {
                      symbol: 'url(images/Cassavetes-s.png)'
                  },

                  }, {
                  name: 'John Barrymore',
                  x: 1942,
                  y: 60,
                  profession: 'Famed Actor Stage, Radio, Screen',
                  photo: "images/photos/Barrymore.jpg",
                  link: "http://en.wikipedia.org/wiki/John_Barrymore",
                  marker: {
                      symbol: 'url(images/Barrymore-s.png)'
                  },

                  }, {
                  name: 'Keith Moon',
                  x: 1978,
                  y: 32,
                  profession: 'Drummer of The Who, Maniac',
                  photo: "images/photos/Moon.jpg",
                  link: "http://en.wikipedia.org/wiki/Keith_Moon",
                  marker: {
                      symbol: 'url(images/Moon-s.png)'
                  },

                  }, {
                  name: 'Lorenz Hart',
                  x: 1943,
                  y: 48,
                  profession: "of Broadway's Rodgers and Hart",
                  photo: "images/photos/Hart.jpg",
                  link: "http://en.wikipedia.org/wiki/Lorenz_Hart",
                  marker: {
                      symbol: 'url(images/hart-s.png)'
                  },

                  }, {
                  name: 'Lou Reed',
                  x: 2013,
                  y: 71,
                  profession: 'Musician, the Velvet Underground',
                  photo: "images/photos/l-reed.jpg",
                  link: "http://en.wikipedia.org/wiki/lou_reed",
                  marker: {
                      symbol: 'url(images/l-reed-s.png)'
                  },

                  }, {
                  name: 'Malcolm Lowry',
                  x: 1957,
                  y: 47,
                  profession: 'Brit Author of Under the Volcano',
                  photo: "images/photos/Lowry.jpg",
                  link: "http://en.wikipedia.org/wiki/Malcolm_Lowry",
                  marker: {
                      symbol: 'url(images/Lowry-s.png)'
                  },

                  }, {
                  name: 'Modest Mussorgsky',
                  x: 1881,
                  y: 42,
                  profession: 'Russian Composer, "The Five"',
                  photo: "images/photos/Mussorgsky.jpg",
                  link: "http://en.wikipedia.org/wiki/Modest_Mussorgsky",
                  marker: {
                      symbol: 'url(images/Mussorgsky-s.png)'
                  },

                  }, {
                  name: 'Noel Redding',
                  x: 2003,
                  y: 57,
                  profession: "English Musician, Jimi's Bassist",
                  photo: "images/photos/Redding.jpg",
                  link: "http://en.wikipedia.org/wiki/Noel_Redding",
                  marker: {
                      symbol: 'url(images/Redding-s.png)'
                  },

                  }, {
                  name: 'Oliver Reed',
                  x: 1999,
                  y: 61,
                  profession: "English Actor",
                  photo: "images/photos/o-Reed.jpg",
                  link: "http://en.wikipedia.org/wiki/Oliver_Reed",
                  marker: {
                      symbol: 'url(images/o-reed-s.png)'
                  },
                    }, {
                  name: 'Phil Katz',
                  x: 2000,
                  y: 37,
                  profession: 'Computer Programmer, Zip Filer',
                  photo: "images/photos/Katz.jpg",
                  link: "http://en.wikipedia.org/wiki/Phil_Katz",
                  marker: {
                      symbol: 'url(images/Katz-s.png)',

                  },

                  }, {
                  name: 'Richard Burton',
                  x: 1984,
                  y: 58,
                  profession: 'Welsh Actor, Liz Taylor-er',
                  photo: "images/photos/Burton.jpg",
                  link: "http://en.wikipedia.org/wiki/Richard_Burton",
                  marker: {
                      symbol: 'url(images/Burton-s.png)'
                  },

                  }, {
                  name: 'Ryan Dunn',
                  x: 2011,
                  y: 34,
                  profession: 'Jackass',
                  photo: "images/photos/Dunn.jpg",
                  link: "http://en.wikipedia.org/wiki/Ryan_Dunn",
                  marker: {
                      symbol: 'url(images/Dunn-s.png)'
                  },

                  }, {
                  name: 'Sam Peckinpah',
                  x: 1984,
                  y: 59,
                  profession: "Filmmaker, Western Revisionist",
                  photo: "images/photos/Peckinpah.jpg",
                  link: "http://en.wikipedia.org/wiki/Sam_Peckinpah",
                  marker: {
                      symbol: 'url(images/Peckinpah-s.png)'
                  },

                  }, {
                  name: 'Tom Simpson',
                  x: 1967,
                  y: 29,
                  profession: 'British Cyclist, Olympian',
                  photo: "images/photos/t-simpson.jpg",
                  link: "http://en.wikipedia.org/wiki/Tom_Simpson",
                  marker: {
                      symbol: 'url(images/t-simpson-s.png)'
                  },

                  }, {
                  name: 'Torsten Carleman',
                  x: 1949,
                  y: 56,
                  profession: 'Influential Swede Mathematician',
                  photo: "images/photos/Carleman.jpg",
                  link: "http://en.wikipedia.org/wiki/Torsten_Carleman",
                  marker: {
                      symbol: 'url(images/Carleman-s.png)'
                  },

                  }, {
                  name: 'Vivien Merchant',
                  x: 1982,
                  y: 53,
                  profession: 'Actress, married Harold Pinter',
                  photo: "images/photos/Merchant.jpg",
                  link: "http://en.wikipedia.org/wiki/Vivien_Merchant",
                  marker: {
                      symbol: 'url(images/Merchant-s.png)'
                  },

                  }, {
                  name: 'Vladimir Vysotsky',
                  x: 1980,
                  y: 42,
                  profession: 'Influential Soviet Poet',
                  photo: "images/photos/Vysotsky.jpg",
                  link: "http://en.wikipedia.org/wiki/Vladimir_Vysotsky",
                  marker: {
                      symbol: 'url(images/Vysotsky-s.png)'
                  },

                  }, {
                  name: 'W.C. Fields',
                  x: 1946,
                  y: 66,
                  profession: 'Comedian, Hard Drinking Egotist',
                  photo: "images/photos/Fields.jpg",
                  link: "http://en.wikipedia.org/wiki/W._C._Fields",
                  marker: {
                      symbol: 'url(images/Fields-s.png)'
                  },

                  }, {
                  name: 'William Holden',
                  x: 1981,
                  y: 63,
                  profession: 'Actor in Network, Wild Bunch',
                  photo: "images/photos/holden.jpg",
                  link: "http://en.wikipedia.org/wiki/William_Holden",
                  marker: {
                      symbol: 'url(images/holden-s.png)'
                  },

                   }, {
     name: 'Hubert Humphrey',
     x: 1978,
     y: 66,
     profession: 'Vice President under Johnson',
     photo: "images/Humphrey.jpg",
     link: "http://en.wikipedia.org/wiki/Hubert_humphrey",
     marker: {
         symbol: 'url(images/Humphrey-s.png)'
     },

     }, {
     name: 'Porfirio Rubirosa',
     x: 1965,
     y: 56,
     profession: 'International Playboy',
     photo: "images/Rubirosa.jpg",
     link: "http://en.wikipedia.org/wiki/Porfirio_Rubirosa",
     marker: {
         symbol: 'url(images/Rubirosa-s.png)'
     },
 }, {
     name: 'Franklin Pierce',
     x: 1869,
     y: 64,
     profession: '14th Pres of the United States',
     photo: "images/Pierce.jpg",
     link: "http://en.wikipedia.org/wiki/Franklin_Pierce",
     marker: {
         symbol: 'url(images/Pierce-s.png)'
     },

      }, {
     name: 'John Bonham',
     x: 1980,
     y: 32,
     profession: 'Drummer of Led Zeppelin',
     photo: "images/Bonham.jpg",
     link: "http://en.wikipedia.org/wiki/John_Bonham",
     marker: {
         symbol: 'url(images/Bonham-s.png)'
     },
 }, {
     name: 'Jackson Pollock',
     x: 1956,
     y: 44,
     profession: 'Abstract Expressionist Painter',
     photo: "images/Pollock.jpg",
     link: "http://en.wikipedia.org/wiki/Jackson_Pollock",
     marker: {
         symbol: 'url(images/Pollock-s.png)'
     },
 }, {
     name: 'Billy Martin',
     x: 1989,
     y: 61,
     profession: 'Yankee Mgr,5x World Series Champ',
     photo: "images/Martin.jpg",
     link: "http://en.wikipedia.org/wiki/Billy_Martin",
     marker: {
         symbol: 'url(images/Martin-s.png)'
     },
 }, {
     name: 'Jack Kerouac',
     x: 1969,
     y: 47,
     profession: 'A Beat Poet who hit the Road',
     photo: "images/Kerouac.jpg",
     link: "http://en.wikipedia.org/wiki/Jack_Kerouac",
     marker: {
         symbol: 'url(images/Kerouac-s.png)'
     },
 }, {
     name: 'John Wayne',
     x: 1979,
     y: 72,
     profession: 'A Cowboy, A WarHero, A Searcher',
     photo: "images/Wayne.jpg",
     link: "http://en.wikipedia.org/wiki/John_Wayne",
     marker: {
         symbol: 'url(images/Wayne-s.png)'
     },
 }, {
     name: 'Ernie Kovacs',
     x: 1962,
     y: 42,
     profession: 'Uninhibited Unexpected Comedian',
     photo: "images/Kovacs.jpg",
     link: "http://en.wikipedia.org/wiki/Ernie_Kovacs",
     marker: {
         symbol: 'url(images/Kovacs-s.png)'
     },

     }, {
     name: 'Erica Blasberg',
     x: 2010,
     y: 25,
     profession: 'LPGA Golfer',
     photo: "images/Blasberg.jpg",
     link: "http://en.wikipedia.org/wiki/Erica Blasberg",
     marker: {
         symbol: 'url(images/Blasberg-s.png)'
     },
 }, {
     name: 'Mickey Mantle',
     x: 1995,
     y: 63,
     profession: '20xAll-Star, The Commerce Comet',
     photo: "images/Mantle.jpg",
     link: "http://en.wikipedia.org/wiki/Mickey_Mantle",
     marker: {
         symbol: 'url(images/Mantle-s.png)'
     },
 }, {
     name: 'O. Henry',
     x: 1910,
     y: 47,
     profession: 'American Writer',
     photo: "images/Henry.jpg",
     link: "http://en.wikipedia.org/wiki/O._Henry",
     marker: {
         symbol: 'url(images/Henry-s.png)'
     },

     }, {
     name: 'Odas Moon',
     x: 1937,
     y: 44,
     profession: 'American Aviation Pioneer',
     photo: "images/o-moon.jpg",
     link: "http://en.wikipedia.org/wiki/Odas_Moon",
     marker: {
         symbol: 'url(images/o-moon-s.png)'
     },
 }, {
     name: 'George C. Scott',
     x: 1999,
     y: 77,
     profession: 'Generals-Patton + Buck Turgidson',
     photo: "images/scott.jpg",
     link: "http://en.wikipedia.org/wiki/George_C._Scott",
     marker: {
         symbol: 'url(images/scott-s.png)'
     },
 }, {
     name: 'Ron "Pigpen" McKernan',
     x: 1973,
     y: 27,
     profession: 'Grateful Dead Founder, PIGPEN!',
     photo: "images/McKernan.jpg",
     link: "http://en.wikipedia.org/wiki/Ron_%22Pigpen%22_McKernan",
     marker: {
         symbol: 'url(images/McKernan-s.png)'
     },

      }, {
     name: 'Steve Prefontaine',
     x: 1975,
     y: 24,
     profession: 'American Runner and Olympian',
     photo: "images/Prefontaine.jpg",
     link: "http://en.wikipedia.org/wiki/Steve_Prefontaine",
     marker: {
         symbol: 'url(images/Prefontaine-s.png)'
     },

     }, {
     name: 'Townes Van Zandt',
     x: 1997,
     y: 52,
     profession: 'American Singer-Songwriter',
     photo: "images/VanZandt.jpg",
     link: "http://en.wikipedia.org/wiki/Townes_Van_Zandt#Death",
     marker: {
         symbol: 'url(images/VanZandt-s.png)'
     },

     }, {
     name: 'Veronica Lake',
     x: 1973,
     y: 50,
     profession: 'Blonde Bombshell',
     photo: "images/Lake.jpg",
     link: "http://en.wikipedia.org/wiki/Veronica_Lake",
     marker: {
         symbol: 'url(images/Lake-s.png)'
     },

     }, {
     name: 'William Rowan Hamilton',
     x: 1865,
     y: 60,
     profession: 'Irish Physicist, Mathematician',
     photo: "images/Hamilton.jpg",
     link: "http://en.wikipedia.org/wiki/William_Rowan_Hamilton",
     marker: {
         symbol: 'url(images/Hamilton-s.png)'
     },





              }],


      }, 

///////////////////////////////// HEROIN
       {
           name: 'Heroin',
           type: 'scatter', 
           lineWidth: 0,
           color: 'rgba(40,40,40,.8',
           yAxis: 1,
           data: [{
                   name: 'Janis Joplin',
                   x: 1970,
                   y: 27,
                   profession: 'American Singer/Songwriter',
                   photo: "images/Joplin.jpg",
                   link: "http://en.wikipedia.org/wiki/Janis_Joplin",
                   marker: {
                       symbol: 'url(images/joplin-s.png)',

                   },
               },
               {
                   name: 'Jean Michel Basquiat',
                   x: 1988,
                   y: 27,
                   profession: 'American Artist, SAMO',
                   photo: "images/Basquiat.jpg",
                   link: "http://en.wikipedia.org/wiki/Basquiat",
                   marker: {
                       symbol: 'url(images/Jean-Michel_Basquiat-s.png)',

                   }
               }, {
                   name: 'River Phoenix',
                   x: 1993,
                   y: 23,
                   profession: 'American Actor, Young Indy',
                   photo: "images/Phoenix.jpg",
                   link: "http://en.wikipedia.org/wiki/River_Phoenix",
                   marker: {
                       symbol: 'url(images/river-phoenix-s.png)'
                   }

                   }, {
                   name: 'Jim Morrison',
                   x: 1971,
                   y: 27,
                   profession: 'American Singer and Poet',
                   photo: "images/Morrison.jpg",
                   link: "http://en.wikipedia.org/wiki/Jim_Morrison",
                   marker: {
                       symbol: 'url(images/jim-morisson-s.png)'
                   },
                    }, {
                   name: 'Chet Baker',
                   x: 1988,
                   y: 58,
                   profession: 'American Jazz Trumpeter',
                   photo: "images/Baker.jpg",
                   link: "http://en.wikipedia.org/wiki/Chet_Baker",
                 
                   marker: {
                       symbol: 'url(images/chet-baker-s.png)'
                   },
                    }, {
                   name: 'Coco Chanel',
                   x: 1971,
                   y: 87,
                   profession: 'French Fashion Designer',
                   photo: "images/Chanel.jpg",
                   link: "http://en.wikipedia.org/wiki/Coco_Chanel",
                 
                   marker: {
                       symbol: 'url(images/coco-chanel-s.png)'
                   },

                   }, {
                   name: 'Gia Carangi',
                   x: 1986,
                   y: 26,
                   profession: 'American Fasion Model',
                   photo: "images/Carangi.jpg",
                   link: "http://en.wikipedia.org/wiki/Gia_Carangi",
                 
                   marker: {
                       symbol: 'url(images/gia-s.png)'
                   },
                   }, {
                   name: 'Brett Whiteley',
                   x: 1992,
                   y: 53,
                   profession: 'Australian avant-garde Artist',
                   photo: 'images/Whiteley.jpg',
                   link: 'http://en.wikipedia.org/wiki/Brett_Whiteley',
                 
                   marker: {
                       symbol: 'url(images/whiteley-s.png)'
                   },
                     }, {
                   name: 'Elisa Bridges',
                   x: 2002,
                   y: 28,
                   profession: 'Playboy Model',
                   photo: "images/Bridges.jpg",
                   link: "http://en.wikipedia.org/wiki/Elisa_Bridges",
                 
                   marker: {
                       symbol: 'url(images/bridges-s.png)'
                   },
                    }, {
                   name: 'Eugene Lipscomb',
                   x: 1963,
                   y: 31,
                   profession: "NFL Lineman, MVP, 'Big Daddy'",
                   photo: "images/Lipscomb.jpg",
                   link: "http://en.wikipedia.org/wiki/Eugene_Lipscomb",
                 
                   marker: {
                       symbol: 'url(images/Lipscomb-s.png)'
                   },

                   }, {
                   name: 'Frankie Lymon',
                   x: 1968,
                   y: 25,
                   profession: 'Boy-soprano in The Teenagers',
                   photo: "images/Lymon.jpg",
                   link: "http://en.wikipedia.org/wiki/Frankie_Lymon",
                 
                   marker: {
                       symbol: 'url(images/Lymon-s.png)'
                   },
                   }, {
                   name: 'Eric Show',
                   x: 1994,
                   y: 37,
                   profession: 'MLB Pitcher- Padres, Athletics',
                   photo: 'images/Show.jpg',
                   link: 'http://en.wikipedia.org/wiki/Eric_Show',
                 
                   marker: {
                       symbol: 'url(images/Show-s.png)'
                   },


                   }, {
                   name: 'Charlie Parker',
                   x: 1955,
                   y: 34,
                   profession: 'BIRD! SAX! Developer of Bebop!',
                   photo: 'images/Parker.jpg',
                   link: 'http://en.wikipedia.org/wiki/Charlie_Parker',
                 
                   marker: {
                       symbol: 'url(images/Parker-s.png)'
                   },
                      }, {
                   name: 'Lester Young',
                   x: 1959,
                   y: 49,
                   profession: 'American Jazz Tenor Saxophonist',
                   photo: 'images/Young.jpg',
                   link: 'http://en.wikipedia.org/wiki/Lester_Young',
                 
                   marker: {
                       symbol: 'url(images/Young-s.png)'
                   },
                   }, {
                   name: 'William Barnsley Allen',
                   x: 1933,
                   y: 41,
                   profession: 'British Army MD, Victoria Cross',
                   photo: 'images/Allen.jpg',
                   link: 'http://en.wikipedia.org/wiki/William_Barnsley_Allen',
                 
                   marker: {
                       symbol: 'url(images/Allen-s.png)'
                   },

               }],
           marker: {
               enabled: true,
               symbol: 'circle'
              
           },
          
        
       },
///////////////////////////////// PILLS
      {
           name: 'Pills',
           type: 'scatter', 
           lineWidth: 0,
           yAxis: 1,
           color: 'rgba(210, 221, 40,.8)',
           data: [{
                   name: 'Aimee Semple McPherson',
                    x: 1920,
                   y: 53,
                   profession: 'Pioneering Media Evangelist',
                   photo: "images/photos/McPherson.jpg",
                   link: "http://en.wikipedia.org/wiki/Aimee_Semple_McPherson",
                   marker: {
                       symbol: 'url(images/Aimee_Semple-s.png)',

                   }
               },
               {
                   name: "Anna Nicole Smith",
                    x: 2007,
                   y: 39,
                   profession: 'Model, TeleVision Train Wreck',
                   photo: "images/smith.jpg",
                   link: "http://en.wikipedia.org/wiki/Anna_Nicole_Smith",
                   marker: {
                       symbol: 'url(images/Smith-s.png)'
                            },
 }, {
                   name: "Judy Garland",
                    x: 1969,
                   y: 47,
                   profession: 'Actress+Singer, Dorothy too!',
                   photo: "images/Garland.jpg",
                   link: "http://en.wikipedia.org/wiki/garland",
                   marker: {
                       symbol: 'url(images/garland-s.png)'
                        },
                        },

               {
                   name: 'Heath Ledger',
                   x: 2008,
                   y: 52,
                   profession: 'Aussie Actor, The Joker',
                   photo: "images/photos/Ledger.jpg",
                   link: "http://en.wikipedia.org/wiki/Heath_Ledger",
                   marker: {
                       symbol: 'url(images/heath-s.png)',

                   }
               },

                {
                   name: 'Clara Blandick',
                   x: 1962,
                   y: 82,
                   profession: "American Actress, Aunt Em",
                   photo: "images/photos/Blandick.jpg",
                   link: "http://en.wikipedia.org/wiki/Clara_Blandick",
                   marker: {
                       symbol: 'url(images/blandick-s.png)',

                   }
               },

               {
                   name: 'Chester Morris',
                   x: 1970,
                   y: 69,
                   profession: 'American Actor',
                   photo: "images/photos/Morris.jpg",
                   link: "http://en.wikipedia.org/wiki/Chester_Morris",

                   marker: {
                       symbol: 'url(images/c-morris-s.png)',

                   }
               },


{
                   name: 'Domino Harvey',
                   x: 2005,
                   y: 35,
                   profession: 'English Bounty Hunter in USA',
                   photo: "images/photos/Harvey.jpg",
                   link: "http://en.wikipedia.org/wiki/Domino_Harvey",
                   marker: {
                       symbol: 'url(images/d-harvey-s.png)',

                   }
               },

               {
                   name: 'Edward A. Hannegan',
                   x: 1857,
                   y: 50,
                   profession: 'Senator from Indiana',
                   photo: "images/photos/Hannegan.jpg",
                   link: "http://en.wikipedia.org/wiki/Edward_A._Hannegan",
                   marker: {
                       symbol: 'url(images/e-hannegan-s.png)',

                   }
               },

                {
                   name: 'Brian Epstein',
                   x: 1967,
                   y: 32,
                   profession: 'Entrepreneur, Beatles Manager',
                   photo: "images/photos/Epstein.jpg",
                   link: "http://en.wikipedia.org/wiki/Brian_Epstein",
                   marker: {
                       symbol: 'url(images/epstein-s.png)',

                   }
               },

               {
                   name: 'Abbie Hoffman',
                    x: 1989,
                   y: 28,
                   profession: 'STEAL THIS GRAPH',
                   photo: "images/photos/a-Hoffman.jpg",
                   link: "http://en.wikipedia.org/wiki/Abbie_Hoffman",
                   marker: {
                       symbol: 'url(images/hoffman-s.png)',

                   }
               },

               {
                   name: 'Carole Landis',
                    x: 1948,
                   y: 29,
                   profession: 'American Actress',
                   photo: "images/photos/landis.jpg",
                   link: "http://en.wikipedia.org/wiki/Carole_Landis",
                   marker: {
                       symbol: 'url(images/landis-s.png)',

                   }
               },

            
               {
                   name: 'Amy Tryon',
                    x: 2012,
                   y: 42,
                   profession: 'American Equestrian',
                   photo: "images/photos/tryon.jpg",
                   link: "http://en.wikipedia.org/wiki/Amy_Tryon",
                   marker: {
                       symbol: 'url(images/tryon-s.png)',

                   }
               },


                   {
                   name: 'Cesare Pavese',
                    x: 1950,
                   y: 41,
                   profession: 'Italian Poet, Novelist',
                   photo: "images/photos/Pavese.jpg",
                   link: "http://en.wikipedia.org/wiki/Cesare_Pavese",
                   marker: {
                       symbol: 'url(images/pavese-s.png)',

                   }
               },

                {
                   name: 'Marilyn Monroe',
                    x: 1962,
                   y: 36,
                   profession: 'American Actress and Model',
                   photo:"images/photos/Monroe.jpg",
                   link: "http://en.wikipedia.org/wiki/Marylin_Monroe",
                   marker: {
                       symbol: 'url(images/marilyn-monroe-s.png)'
                   },

                   }, {
                   name: 'Diane Arbus',
                    x: 1971,
                   y: 48,
                   profession: 'American Photographer, Deviant',
                   photo: "images/photos/Arbus.jpg",
                   link: "http://en.wikipedia.org/wiki/Diane_Arbus",

                   marker: {
                       symbol: 'url(images/diane-arbus-s.png)'
                   },

                   }, {
                   name: 'Dorothy Dandridge',
                    x: 1965,
                   y: 42,
                   profession: 'Pioneering Black Actress',
                   photo: "images/photos/Dandridge.jpg",
                   link: "http://en.wikipedia.org/wiki/Dorothy_Dandridge",
                   marker: {
                       symbol: 'url(images/dorothy-dandridge-s.png)'
                   },

                   }, {
                   name: 'George Hickenlooper',
                    x: 2010,
                   y: 47,
                   profession: 'American Documentary Filmmaker',
                   photo: "images/photos/Hickenlooper.jpg",
                   link: "http://en.wikipedia.org/wiki/George_Hickenlooper",
                   marker: {
                       symbol: 'url(images/hickenlooper-s.png)'
                   },

                   }, {
                   name: 'Gertrude Bell',
                    x: 1926,
                   y: 57,
                   profession: "Brit Writer, Archaeologist SPY!",
                   photo: "images/photos/bell.jpg",
                   link: "http://en.wikipedia.org/wiki/Gertrude_Bell",
                   marker: {
                       symbol: 'url(images/bell-s.png)'
                   },


                   }, {
                   name: 'James Leo Herlihy',
                    x: 1993,
                   y: 55,
                   profession: 'American Novelist, Playwright',
                   photo: "images/photos/Herlihy.jpg",
                   link: "http://en.wikipedia.org/wiki/James_Leo_Herlihy",
                   marker: {
                       symbol: 'url(images/james-leo-s.png)'
                   },
               }],
           marker: {
               enabled: true,
               symbol: 'circle'
              
           },
          
           

       },
///////////////////////////////// COCAINE
         {
           name: 'Cocaine',
           type: 'scatter', 
           lineWidth: 0,
           color: 'rgba(220, 240, 240,.9)',
           yAxis: 1,
           data: [{
                   name: 'Rainer Werner Fassbinder',
                    x: 1982,
                   y: 37,
                   profession: 'Prolific German Filmmaker',
                   photo: "images/Fassbinder.jpg",
                   link: "http://en.wikipedia.org/wiki/Fassbinder",
                   marker: {
                       symbol: 'url(images/rainer-werner-fassbinder-s.png)',

                   }
                   }, {
                   name: 'Bam Bam Bigelow',
                    x: 2007,
                   y: 45,
                   profession: 'WWF Wrestler, BAM!',
                   photo: "images/Bigelow.jpg",
                   link: "http://en.wikipedia.org/wiki/Bam_Bam_Bigelow",
                   marker: {
                       symbol: 'url(images/bam-bam-s.png)'
                   },

                   },

                   {
                   name: 'Darrell Porter',
                    x: 2002,
                   y: 50,
                   profession: 'MLB Catcher',
                   photo: "images/Porter.jpg",
                   link: "http://en.wikipedia.org/wiki/Darrell_Porter",
                   marker: {
                       symbol: 'url(images/d-porter-s.png)'
                   },

                    },

                   {
                   name: 'David Ruffin',
                    x: 1991,
                   y: 50,
                   profession: 'Musician/Singer,The Temptations',
                   photo: "images/ruffin.jpg",
                   link: "http://en.wikipedia.org/wiki/David_Ruffin",
                   marker: {
                       symbol: 'url(images/d-ruffin-s.png)'
                   },

                   },

                   {
                   name: 'Don Simpson',
                    x: 1996,
                   y: 52,
                   profession: 'Producer of Top Gun, The Rock',
                   photo: "images/d-Simpson.jpg",
                   link: "http://en.wikipedia.org/wiki/Don_Simpson",
                   marker: {
                       symbol: 'url(images/d-simpson-s.png)'
                   },

                    },
                    {
                   name: 'Billy Mays',
                    x: 2009,
                   y: 50,
                   profession: 'Entrepreneur/Salesman, OxiClean',
                   photo: "images/mays.jpg",
                   link: "http://en.wikipedia.org/wiki/Billy_Mays",
                   marker: {
                       symbol: 'url(images/mays-s.png)'
                   },

                   },
                    {
                   name: 'Andy Gibb',
                    x: 1988,
                   y: 30,
                   profession: 'English Singer, Teen Idol',
                   photo: "images/gibb.jpg",
                   link: "http://en.wikipedia.org/wiki/Andy_Gibb",
                   marker: {
                       symbol: 'url(images/gibb-s.png)'
                   },

                   },
                    {
                   name: 'Chris Farley',
                    x: 1997,
                   y: 33,
                   profession: 'Hilarious Comedian, Tommy Boy',
                   photo: "images/Farley.jpg",
                   link: "http://en.wikipedia.org/wiki/Chris_Farley",
                   marker: {
                       symbol: 'url(images/farley-s.png)'
                   },
                   },
                    {
                   name: 'Chris Mainwaring',
                    x: 2007,
                   y: 41,
                   profession: 'Aussie Rules Footballer',
                   photo: "images/Mainwaring.jpg",
                   link: "http://en.wikipedia.org/wiki/Chris_Mainwaring",
                   marker: {
                       symbol: 'url(images/mainwaring-s.png)'
                   },

                    },

                   {
                   name: 'Bill Hicks',
                    x: 1994,
                   y: 32,
                   profession: 'Stand-up Comedian, Spaceman',
                   photo: "images/Hicks.jpg",
                   link: "http://en.wikipedia.org/wiki/Bill_Hicks",
                   marker: {
                       symbol: 'url(images/Hicks-s.png)'
                   },

                   },

                   {
                   name: 'Christopher Bowman',
                    x: 2008,
                   y: 40,
                   profession: 'American Figure Skater,Olympian',
                   photo: "images/Bowman.jpg",
                   link: "http://en.wikipedia.org/wiki/Christopher_Bowman",
                   marker: {
                       symbol: 'url(images/Bowman-s.png)'
                   },
                   },
                    {
                   name: 'Georg Trakl',
                    x: 1914,
                   y: 27,
                   profession: 'Austrian Poet, Expressionist',
                   photo: "images/Trakl.jpg",
                   link: "http://en.wikipedia.org/wiki/Georg_Trakl",
                   marker: {
                       symbol: 'url(images/Trakl-s.png)'
                   },
                   },
                    {
                   name: 'Ike Turner',
                    x: 2007,
                   y: 76,
                   profession: 'of Ike and Tina, Scary Man',
                   photo: "images/turner.jpg",
                   link: "http://en.wikipedia.org/wiki/Ike_Turner",
                   marker: {
                       symbol: 'url(images/Turner-s.png)'
                   },

                   },
                    {
                   name: 'Jacques Damala',
                    x: 1889,
                   y: 34,
                   profession: 'Greek Actor in France, Hedonist',
                   photo: "images/Damala.jpg",
                   link: "http://en.wikipedia.org/wiki/Jacques_Damala",
                   marker: {
                       symbol: 'url(images/damala-s.png)'
                   },


                   },
                    {
                   name: 'John Entwistle',
                    x: 2002,
                   y: 57,
                   profession: "The Who's bassist",
                   photo: "images/Entwistle.jpg",
                   link: "http://en.wikipedia.org/wiki/John_Entwistle",
                   marker: {
                       symbol: 'url(images/Entwistle-s.png)'
                   },

                   },
                    {
                   name: 'Len Bias',
                    x: 1986,
                   y: 22,
                   profession: "Greatest NBA Player Who Didn't",
                   photo: "images/Bias.jpg",
                   link: "http://en.wikipedia.org/wiki/Len_Bias",
                   marker: {
                       symbol: 'url(images/bias-s.png)'
                   },

                     },

                   {
                   name: 'Marco Pantani',
                    x: 2004,
                   y: 34,
                   profession: 'Famed Italian Cyclist, Champion',
                   photo: "images/Pantani.jpg",
                   link: "http://en.wikipedia.org/wiki/Marco_Pantani",
                   marker: {
                       symbol: 'url(images/Pantani-s.png)'
                   },
                    },

                   {
                   name: "Ol' Dirty Bastard",
                    x: 2004,
                   y: 35,
                   profession: 'Outrageously Profane Wu-Tang-er',
                   photo: "images/bastard.jpg",
                   link: "http://en.wikipedia.org/wiki/Ol'_Dirty_Bastard",
                   marker: {
                       symbol: 'url(images/bastard-s.png)'
                   },

                     },
                    {
                   name: 'Richard Manuel',
                    x: 1986,
                   y: 42,
                   profession: 'Canadian Musician in The Band',
                   photo: "images/Manuel.jpg",
                   link: "http://en.wikipedia.org/wiki/Richard_Manuel",
                   marker: {
                       symbol: 'url(images/Manuel-s.png)'
                   },
                   },
                    {
                   name: 'Rod Scurry',
                    x: 1992,
                   y: 36,
                   profession: 'MLB Pitcher, Pirate, Yankee',
                   photo: "images/Scurry.jpg",
                   link: "http://en.wikipedia.org/wiki/Rod_Scurry",
                   marker: {
                       symbol: 'url(images/Scurry-s.png)'
                   },

                 },
                    {
                   name: 'Shannon Hoon',
                    x: 1995,
                   y: 28,
                   profession: 'Singer of Blind Melon',
                   photo: "images/Hoon.jpg",
                   link: "http://en.wikipedia.org/wiki/Shannon_Hoon",
                   marker: {
                       symbol: 'url(images/Hoon-s.png)'
                   },

                   },
                    {
                   name: 'Ted Demme',
                    x: 2002,
                   y: 38,
                   profession: "Filmmaker, Director of 'Blow'",
                   photo: "images/Demme.jpg",
                   link: "http://en.wikipedia.org/wiki/Ted_Demme",
                   marker: {
                       symbol: 'url(images/Demme-s.png)'
                   },
 },
                    {
                   name: 'Patrick Bissell',
                    x: 1987,
                   y: 30,
                   profession: 'Dancer, American Ballet Theatre',
                   photo: "images/Bissell.jpg",
                   link: "http://en.wikipedia.org/wiki/Patrick_Bissell",
                   marker: {
                       symbol: 'url(images/Bissell-s.png)'
                   },

                   },
                    {
                   name: 'Whiney Houston',
                    x: 2012,
                   y: 48,
                   profession: 'American Singer',
                   photo: "images/w-Houston.jpg",
                   link: "http://en.wikipedia.org/wiki/Whitney_Houston",
                   marker: {
                       symbol: 'url(images/w-Houston-s.png)'
                   },


                   },
                    {
                   name: 'Zoë Tamerlis Lund',
                    x: 2002,
                   y: 38,
                   profession: "American Actress, Model, Ms.45",
                   photo: "images/Lund.jpg",
                   link: "http://en.wikipedia.org/wiki/Zo%C3%AB_Tamerlis_Lund",
                   marker: {
                       symbol: 'url(images/Lund-s.png)'
                   },

                                       }, {
                   name: 'Donyale Luna',
                    x: 1979,
                   y: 33,
                   profession: 'Supermodel + Actress',
                   photo: "images/Luna.jpg",
                   link: "http://en.wikipedia.org/wiki/Donyale_Luna",
                   marker: {
                       symbol: 'url(images/luna-s.png)'
                   },
                    }, {
                   name: 'George Sanders',
                    x: 1972,
                   y: 65,
                   profession: 'Russian-born EnglishActor,bored',
                   photo: "images/Sanders.jpg",
                   link: "http://en.wikipedia.org/wiki/George_Sanders",
                   marker: {
                       symbol: 'url(images/Sanders-s.png)'
                   },
                    }, {
                   name: 'Lester Bangs',
                    x: 1982,
                   y: 33,
                   profession: 'Wrote for Rolling Stone, Creem',
                   photo: "images/Bangs.jpg",
                   link: "http://en.wikipedia.org/wiki/Lester_Bangs",
                   marker: {
                       symbol: 'url(images/Bangs-s.png)'
                   },
                    }, {
                   name: 'Nick Drake',
                    x: 1974,
                   y: 26,
                   profession: 'Singer/Songwriter, "Pink Moon"',
                   photo: "images/Drake.jpg",
                   link: "http://en.wikipedia.org/wiki/Nick_Drake",
                   marker: {
                       symbol: 'url(images/Drake-s.png)'
                   },
                     }, {
                   name: "Johnny O'keefe",
                    x: 1935,
                   y: 43,
                   profession: 'Aussie Rocker, Wild One+Shout!',
                   photo: "images/okeefe.jpg",
                   link: "http://en.wikipedia.org/wiki/Johnny_O'Keefe#Death_and_legacy",
                   marker: {
                       symbol: 'url(images/okeefe-s.png)'
                   },
 },  {
                   name: "Nick Adams",
                    x: 1968,
                   y: 36,
                   profession: 'Actor and Notorious Partier',
                   photo: "images/adams.jpg",
                   link: "http://en.wikipedia.org/wiki/Nick_Adams_(actor)",
                   marker: {
                       symbol: 'url(images/adams-s.png)'
                        },
                         }, {
                   name: "Pier Angeli",
                    x: 1971,
                   y: 39,
                   profession: 'Italian Actress',
                   photo: "images/Angeli.jpg",
                   link: "http://en.wikipedia.org/wiki/Pier_Angeli",
                   marker: {
                       symbol: 'url(images/Angeli-s.png)'
                        },
               }, {
                   name: 'Tommy Dorsey',
                   x: 1956,
                   y: 51,
                   profession: 'American Jazz Trumbonist',
                   photo: "images/Dorsey.jpg",
                   link: "http://en.wikipedia.org/wiki/Tommy Dorsey",
                   marker: {
                       symbol: 'url(images/Dorsey-s.png)'
  },



                   



               
               }],
           marker: {
               enabled: true,
               symbol: 'circle'
              
           },
           

       },
///////////////////////////////// COMBINATIONS
       {
           name: 'Combinations/Complications',
           type: 'scatter', 
           lineWidth: 0,
           color: 'rgba(242, 62, 71,.8)',
           yAxis: 1,
           data: [{
                   name: 'Barbette',
                    x: 1973,
                   y: 74,
                   profession: 'American Trapeze Artist',
                   photo: "images/photos/barbette.jpg",
                   link: "http://en.wikipedia.org/wiki/Barbette_(performer)",
                   marker: {
                       symbol: 'url(images/barbette-s.png)',

                   }
               },

               {
                   name: 'Brittany Murphy',
                    x: 2009,
                   y: 32,
                   profession: 'Actress',
                   photo: "images/photos/Murphy.jpg",
                   link: "http://en.wikipedia.org/wiki/Britney_Murphy",
                   marker: {
                       symbol: 'url(images/b-murphy-s.png)',

                   }
               },


               {
                   name: 'Brian Jones',
                    x: 1969,
                   y: 32,
                   profession: 'Founder of the Rolling Stones',
                   photo: "images/Jones.jpg",
                   link: "http://en.wikipedia.org/wiki/Brian_Jones",
                   marker: {
                       symbol: 'url(images/b-jones-s.png)',

                   }
               },

                {
                   name: 'Jay Reatard',
                    x: 2010,
                   y: 29,
                   profession: 'Musican',
                   photo: "images/photos/reatard.jpg",
                   link: "http://en.wikipedia.org/wiki/Jay_Reatard",
                   marker: {
                       symbol: 'url(images/jay-reatard-s.png)'
                   },

                   },

                   {
                   name: 'Jimi Hendrix',
                    x: 1970,
                   y: 27,
                   profession: 'arguably the greatest guitarist',
                   photo: "images/photos/hendrix.jpg",
                   link: "http://en.wikipedia.org/wiki/Jimi_Hendrix",
                   marker: {
                       symbol: 'url(images/hendrix-s.png)'
                   },
               },

               {
                   name: 'Christopher Hitchens',
                    x: 2011,
                   y: 62,
                   profession: 'Debater, The Portable Atheist',
                   photo: "images/photos/Hitchens.jpg",
                   link: "http://en.wikipedia.org/wiki/Christopher_Hitchens",
                   marker: {
                       symbol: 'url(images/c-hitchens-s.png)'
                   },
               },

               {
                   name: 'Chris Penn',
                    x: 2006,
                   y: 40,
                   profession: 'Nice Guy Eddie',
                   photo: "images/photos/penn.jpg",
                   link: "http://en.wikipedia.org/wiki/Chris_Penn",
                   marker: {
                       symbol: 'url(images/penn-s.png)'
                   },
               },
               {
                   name: 'Alma Rubens',
                    x: 1931,
                   y: 33,
                   profession: 'Silent Film Star',
                   photo: "images/photos/Rubens.jpg",
                   link: "http://en.wikipedia.org/wiki/Alma_Rubens",
                   marker: {
                       symbol: 'url(images/rubens-s.png)'
                   },
               },
                {
                   name: 'Edgar Allan Poe',
                    x: 1849,
                   y: 40,
                   profession: 'Romantic Poet, Macabre Author',
                   photo: "images/photos/Poe.jpg",
                   link: "http://en.wikipedia.org/wiki/Edgar_Allan_Poe",
                   marker: {
                       symbol: 'url(images/poe-s.png)'
                   },
               },

                {
                   name: 'Branwell Brontë',
                    x: 1848,
                   y: 31,
                   profession: 'English Poet, Writer, Painter',

                   photo: "images/photos/bronte.jpg",
                   link: "http://en.wikipedia.org/wiki/Branwell_Bront%C3%AB",
                   marker: {
                       symbol: 'url(images/branwell-s.png)'
                   },
               },

                {
                   name: 'Esther Phillips',
                    x: 1984,
                   y: 48,
                   profession: 'Singer',
                   photo: "images/photos/Phillips.jpg",
                   link: "http://en.wikipedia.org/wiki/Esther_Phillips",
                   marker: {
                       symbol: 'url(images/esther-s.png)'
                   },
               },

                {
                   name: 'Bernard Kettlewell',
                    x: 1979,
                   y: 72,
                   profession: 'British Geneticist, Mothman',
                   photo: "images/photos/Kettlewell.jpg",
                   link: "http://en.wikipedia.org/wiki/Bernard_Kettlewell",
                   marker: {
                       symbol: 'url(images/kettlewell-s.png)'
                   },
               },

               {
                   name: 'Alan Ladd',
                    x: 1964,
                   y: 50,
                   profession: 'Actor, Shane',
                   photo: "images/photos/Ladd.jpg",
                   link: "http://en.wikipedia.org/wiki/Alan_Ladd",
                   marker: {
                       symbol: 'url(images/ladd-s.png)'
                   },
               },


               {
                   name: 'Elizabeth Siddal',
                    x: 1862,
                   y: 32,
                   profession: 'English Model, Poet, Artist',
                   photo: "images/Siddal.jpg",
                   link: "http://en.wikipedia.org/wiki/Elizabeth_Siddal",
                   marker: {
                       symbol: 'url(images/Siddal-s.png)'
                   },
               },
               {
                   name: 'Frida Kahlo',
                    x: 1954,
                   y: 47,
                   profession: 'Mexican Artist wed Diego Rivera',
                   photo: "images/Kahlo.jpg",
                   link: "http://en.wikipedia.org/wiki/Frida_Kahlo",
                   marker: {
                       symbol: 'url(images/Kahlo-s.png)'
                   },
               },
               {
                   name: 'Gram Parsons',
                    x: 1973,
                   y: 26,
                   profession: 'Musician+Flying Burrito Brother',
                   photo: "images/Parsons.jpg",
                   link: "http://en.wikipedia.org/wiki/Gram_Parsons",
                   marker: {
                       symbol: 'url(images/Parsons-s.png)'
                   },
               },

               {
                   name: 'Janet Achurch',
                    x: 1916,
                   y: 45,
                   profession: 'English Stage Actress',
                   photo: "images/Achurch.jpg",
                   link: "http://en.wikipedia.org/wiki/Janet_Achurch",
                   marker: {
                       symbol: 'url(images/Achurch-s.png)'
                       },
                   },
                   {
                   name: 'Jay Bennett',
                    x: 2009,
                   y: 51,
                   profession: 'Musician, Guitarist in Wilco',
                   photo: "images/Bennett.jpg",
                   link: "http://en.wikipedia.org/wiki/Jay_Bennett",
                   marker: {
                       symbol: 'url(images/Bennett-s.png)'
                   },
                   },
               {
                   name: 'Jerry Garcia',
                    x: 1995,
                   y: 53,
                   profession: "Grateful Dead Head, +HippieLord",
                   photo: "images/Garcia.jpg",
                   link: "http://en.wikipedia.org/wiki/Jerry_Garcia",
                   marker: {
                       symbol: 'url(images/Garcia-s.png)'
                   
                      },
                   },

                {
                   name: 'John Candy',
                    x: 1994,
                   y: 43,
                   profession: 'Half Man, Half Dog. A MOG!',
                   photo: "images/Candy.jpg",
                   link: "http://en.wikipedia.org/wiki/John_candy",
                   marker: {
                       symbol: 'url(images/Candy-s.png)'
                   
                      },
                   },
               {
                   name: 'Lenny Bruce',
                    x: 1966,
                   y: 40,
                   profession: 'Standup Satirist/Maybe Satanist',
                   photo: "images/Bruce.jpg",
                   link: "http://en.wikipedia.org/wiki/Lenny_Bruce",
                   marker: {
                       symbol: 'url(images/bruce-s.png)'
                   },
                   },
               {
                   name: 'Louisa May Alcott',
                    x: 1888,
                   y: 55,
                   profession: 'American Novelist, Little Lady',
                   photo: "images/Alcott.jpg",
                   link: "http://en.wikipedia.org/wiki/Louisa_May_Alcott",
                   marker: {
                       symbol: 'url(images/Alcott-s.png)'
                   },
                   },
                  {
                   name: 'Mattie Blaylock',
                    x: 1888,
                   y: 37,
                   profession: "Wyatt Earp's Lady of The Night",
                   photo: "images/Blaylock.jpg",
                   link: "http://en.wikipedia.org/wiki/mattie_blaylock",
                   marker: {
                       symbol: 'url(images/Blaylock-s.png)'
                   },
                   },

                   {
                   name: 'R.G. Surdam',
                    x: 1891,
                   y: 56,
                   profession: 'American Real Estate Magnate',
                   photo: "images/Surdam.jpg",
                   link: "http://en.wikipedia.org/wiki/R._G._Surdam",
                   marker: {
                       symbol: 'url(images/surdam-s.png)'
                   },
                   },
               {
                   name: 'Max Linder',
                    x: 1925,
                   y: 41,
                   profession: 'French Silent Filmmaker',
                   photo: "images/Linder.jpg",
                   link: "http://en.wikipedia.org/wiki/Max_Linder",
                   marker: {
                       symbol: 'url(images/Linder-s.png)'
                   },
               },
{
                   name: 'Michael Jackson',
                    x: 2009,
                   y: 50,
                   profession: 'Certified King of Pop',
                   photo: "images/Jackson.jpg",
                   link: "http://en.wikipedia.org/wiki/Michael_Jackson",
                   marker: {
                       symbol: 'url(images/Jackson-s.png)'
                   },
               },
               {
                   name: 'Truman Capote',
                    x: 1984,
                   y: 59,
                   profession: "'Non-Fiction Novel' Writer",
                   photo: "images/capote.jpg",
                   link: "http://en.wikipedia.org/wiki/Truman_Capote",
                   marker: {
                       symbol: 'url(images/capote-s.png)'
                   },
               },
               {
                   name: 'Thomas Kinkade',
                    x: 2012,
                   y: 54,
                   profession: 'A Terrible Painter of Unicorns',
                   photo: "images/Kinkade.jpg",
                   link: "http://en.wikipedia.org/wiki/Thomas_Kinkade",
                   marker: {
                       symbol: 'url(images/Kinkade-s.png)'
                   },
               },
{
                   name: 'Ureli Corelli Hill',
                    x: 1875,
                   y: 71,
                   profession: '1st Conductor of NYPhilharmonic',
                   photo: "images/Hill.jpg",
                   link: "http://en.wikipedia.org/wiki/Ureli_Corelli_Hill",
                   marker: {
                       symbol: 'url(images/hill-s.png)'
                   },
               },
{
                   name: 'Wallace Reid',
                    x: 1923,
                   y: 31,
                   profession: 'American Silent Film Actor',
                   photo: "images/Reid.jpg",
                   link: "http://en.wikipedia.org/wiki/Wallace_Reid",
                   marker: {
                       symbol: 'url(images/Reid-s.png)'
                   },
               },
{
                   name: 'Giacomo Puccini',
                    x: 1924,
                   y: 65,
                   profession: 'Famed Italian Opera Composer',
                   photo: "images/Puccini.jpg",
                   link: "http://en.wikipedia.org/wiki/Giacomo_Puccini",
                   marker: {
                       symbol: 'url(images/Puccini-s.png)'
                   },
            

               },

               ],
           marker: {
               enabled: true,
               symbol: 'circle'
           },
       },
     ///////////////////////////////// TOBACCO
       {
           name: 'Tobacco',
           type: 'scatter',
           lineWidth: 0,
           color: 'rgba(255, 165, 0,.8)',
           yAxis: 1,
           data: [

     {
                   name: 'Beverly Sills',
                   x: 2007,
                   y: 76,
                   profession: 'Brooklyn-born Operatic Soprano',
                   photo: "images/Sills.jpg",
                
                   link: "http://en.wikipedia.org/wiki/Beverly_Sills",

                   marker: {
                       symbol: 'url(images/Sills-s.png)'
                
                       },
               },


      {
                   name: 'Paul Newman',
                    x: 2008,
                   y: 83,
                   profession: 'Actor, Yalie, Racer, Founder',
                   photo: "images/Newman.jpg",
                   link: "http://en.wikipedia.org/wiki/Paul_Newman",


                   marker: {
                       symbol: 'url(images/Newman-s.png)'
                           },
                   },
            {
                   name: 'Yul Brynner',
                    x: 1985,
                   y: 65,
                   profession: 'King of Siam, RobotCowboy, Bald',
                   photo: "images/Brynner.jpg",
                   link: "http://en.wikipedia.org/wiki/Yul_Brynner",
                   marker: {
                       symbol: 'url(images/Brynner-s.png)'
                   },
               },

                {
                   name: 'Desi Arnaz',
                    x: 1986,
                   y: 69,
                   profession: 'Cuban-Am Actor, Ricky Ricardo',

                   photo: "images/Arnaz.jpg",
                   link: "http://en.wikipedia.org/wiki/Desi_Arnaz",
                   marker: {
                       symbol: 'url(images/Arnaz-s.png)'
                   },
               },

                 {
                   name: 'Bill Blass',
                    x: 2002,
                   y: 79,
                   profession: 'Fashion Designer',
                   photo: "images/Blass.jpg",
                   link: "http://en.wikipedia.org/wiki/Bill_Blass",
                   marker: {
                       symbol: 'url(images/blass-s.png)'
                   },
               },

               {
                   name: 'Edward R. Murrow',
                    x: 1965,
                   y: 57,
                   profession: 'Pioneering TV-Journalist',
                   photo: "images/Murrow.jpg",
                   link: "http://en.wikipedia.org/wiki/Edward_R._Murrow",
                   marker: {
                       symbol: 'url(images/Murrow-s.png)'
                   },
               },

               {
                   name: 'Moe Howard',
                    x: 1975,
                   y: 77,
                   profession: 'Leader of Stooges,Poker of Eyes',
                   photo: "images/howard.jpg",
                   link: "http://en.wikipedia.org/wiki/Moe_Howard",
                   marker: {
                       symbol: 'url(images/Howard-s.png)'
                   },
               },

               {
                   name: 'Susan Hayward',
                   x: 1975,
                   y: 57,
                   profession: 'Academy Award Winning Actress',
                   photo: "images/Hayward.jpg",
                
                   link: "http://en.wikipedia.org/wiki/Susan_Hayward",

                   marker: {
                       symbol: 'url(images/Hayward-s.png)'
                
                       },
               },

               {
                   name: 'George Harrison',
                    x: 2008,
                   y: 83,
                   profession: 'Beatle, Wilbury, Film Producer',
                   photo: "images/Harrison.jpg",
                   link: "http://en.wikipedia.org/wiki/George_Harrison",


                   marker: {
                       symbol: 'url(images/Harrison-s.png)'
                           },
                   },
            
                {
                   name: 'Dashiell Hammett',
                    x: 1961,
                   y: 66,
                   profession: 'Hard-boiled Detective Novelist',
                   photo: "images/Hammett.jpg",
                   link: "http://en.wikipedia.org/wiki/Dashiell_Hammett",
                   marker: {
                       symbol: 'url(images/Hammett-s.png)'
                   },
               },

                {
                   name: 'Betty Grable',
                    x: 1973,
                   y: 56,
                   profession: 'Hollywood Actress, Nice Legs',

                   photo: "images/Grable.jpg",
                   link: "http://en.wikipedia.org/wiki/Betty_Grable",
                   marker: {
                       symbol: 'url(images/Grable-s.png)'
                   },
               },

               {
                   name: 'Roberto Goizueta',
                    x: 1997,
                   y: 65,
                   profession: 'CEO of The Coca-Cola Company',
                   photo: "images/Goizueta.jpg",
                   link: "http://en.wikipedia.org/wiki/Roberto_Goizueta",
                   marker: {
                       symbol: 'url(images/Goizueta-s.png)'
                   },
               },

                {
                   name: 'Ulysses S. Grant',
                    x: 1885,
                   y: 63,
                   profession: 'Dude on the $50 Bill',
                   photo: "images/Grant.jpg",
                   link: "http://en.wikipedia.org/wiki/Ulysses_S._Grant",
                   marker: {
                       symbol: 'url(images/Grant-s.png)'
                   },
               },

               {
                   name: 'Wilhelmina Cooper',
                    x: 1980,
                   y: 39,
                   profession: 'Dutch Model, Founder',
                   photo: "images/w-Cooper.jpg",
                   link: "http://en.wikipedia.org/wiki/Wilhelmina_Cooper",
                   marker: {
                       symbol: 'url(images/w-Cooper-s.png)'
                   },
               },
 {
                   name: 'Gary Cooper',
                    x: 1961,
                   y: 60,
                   profession: 'Academy Award Winning Actor',
                   photo: "images/g-Cooper.jpg",
                   link: "http://en.wikipedia.org/wiki/Gary_Cooper",


                   marker: {
                       symbol: 'url(images/g-cooper-s.png)'
                           },
                   },
            
                {
                   name: 'Chuck Connors',
                    x: 1992,
                   y: 71,
                   profession: 'Actor, Rifleman, MLB+NBA Player',
                   photo: "images/Connors.jpg",
                   link: "http://en.wikipedia.org/wiki/Chuck_Connors",
                   marker: {
                       symbol: 'url(images/Connors-s.png)'
                   },
               },

                {
                   name: 'Nat King Cole',
                    x: 1965,
                   y: 45,
                   profession: 'American Singer and Musician',

                   photo: "images/cole.jpg",
                   link: "http://en.wikipedia.org/wiki/Nat_King_Cole",
                   marker: {
                       symbol: 'url(images/cole-s.png)'
                   },
               },

                {
                   name: 'James Baldwin',
                    x: 1987,
                   y: 63,
                   profession: 'Harlem-born Author of NativeSon',
                   photo: "images/Baldwin.jpg",
                   link: "http://en.wikipedia.org/wiki/James_Baldwin",
                   marker: {
                       symbol: 'url(images/baldwin-s.png)'
                   },
               },

                {
                   name: 'Lucille Ball',
                    x: 1989,
                   y: 77,
                   profession: 'Comedienne, Actress, "Lucy"',
                   photo: "images/Ball.jpg",
                   link: "http://en.wikipedia.org/wiki/Lucille_Ball",
                   marker: {
                       symbol: 'url(images/Ball-s.png)'
                   },
               },

               {
                   name: 'Walt Disney',
                    x: 1966,
                   y: 65,
                   profession: 'Cultural Icon, Entrepreneur',
                   photo: "images/Disney.jpg",
                   link: "http://en.wikipedia.org/wiki/Walt_Disney",
                   marker: {
                       symbol: 'url(images/Disney-s.png)'
                   },
               },

               {
                   name: 'Humphrey Bogart',
                   x: 1957,
                   y: 57,
                   profession: "Really, don't Bogart that joint",
                   photo: "images/Bogart.jpg",
                
                   link: "http://en.wikipedia.org/wiki/Bogart",

                   marker: {
                       symbol: 'url(images/Bogart-s.png)'
                
                       },
               },

               {
                   name: 'Hal Ashby',
                    x: 1988,
                   y: 59,
                   profession: "'New Hollywood' Director",
                   photo: "images/Ashby.jpg",
                   link: "http://en.wikipedia.org/wiki/Hal_Ashby",


                   marker: {
                       symbol: 'url(images/Ashby-s.png)'
                           },
                   },

                {
                   name: 'Carl Wilson',
                    x: 1998,
                   y: 51,
                   profession: 'Beach Boy',
                   photo: "images/c-wilson.jpg",
                   link: "http://en.wikipedia.org/wiki/Carl_Wilson",
                   marker: {
                       symbol: 'url(images/c-wilson-s.png)'
                   },
               },

                {
                   name: 'Tallulah Bankhead',
                    x: 1968,
                   y: 66,
                   profession: 'Hollywood Actress',

                   photo: "images/Bankhead.jpg",
                   link: "http://en.wikipedia.org/wiki/Tallulah_Bankhead",
                   marker: {
                       symbol: 'url(images/Bankhead-s.png)'
                   },
               },

               {
                   name: 'Sammy Davis Jr.',
                    x: 1990,
                   y: 64,
                   profession: 'American Entertainer',
                   photo: "images/davis.jpg",
                   link: "http://en.wikipedia.org/wiki/Sammy_Davis,_Jr.",
                   marker: {
                       symbol: 'url(images/davis-s.png)'
                   },
               },

                {
                   name: 'Duke Ellington',
                    x: 1974,
                   y: 75,
                   profession: 'American Composer, Bandleader',
                   photo: "images/Ellington.jpg",
                   link: "http://en.wikipedia.org/wiki/Duke_Ellington",
                   marker: {
                       symbol: 'url(images/Ellington-s.png)'
                   },
               },

               {
                   name: 'Lorraine Hansberry',
                    x: 1965,
                   y: 34,
                   profession: 'Playwright, A Raisin in the Sun',
                   photo: "images/Hansberry.jpg",
                   link: "http://en.wikipedia.org/wiki/Lorraine_Hansberry",
                   marker: {
                       symbol: 'url(images/Hansberry-s.png)'
                   },
               },

                      {
                   name: 'Pat Nixon',
                    x: 1993,
                   y: 81,
                   profession: 'First Lady of the United States',

                   photo: "images/Nixon.jpg",
                   link: "http://en.wikipedia.org/wiki/Pat_Nixon",
                   marker: {
                       symbol: 'url(images/Nixon-s.png)'
   },
               },

                {
                   name: 'Petter Jennings',
                    x: 2005,
                   y: 67,
                   profession: 'Canadian-American News Anchor',
                   photo: "images/Jennings.jpg",
                   link: "http://en.wikipedia.org/wiki/Peter_Jennings",
                   marker: {
                       symbol: 'url(images/Jennings-s.png)'
                   },
               },
{
                   name: 'Bob Fosse',
                    x: 1987,
                   y: 60,
                   profession: 'Choreographer, Actor, Dancer',

                   photo: "images/Fossee.jpg",
                   link: "http://en.wikipedia.org/wiki/Bob_Fosse",
                   marker: {
                       symbol: 'url(images/fosse-s.png)'
                   },
               },




                       {
                   name: 'T.S. Eliot',
                    x: 1965,
                   y: 76,
                   profession: 'Master Poet, liable for Cats',

                   photo: "images/Eliot.jpg",
                   link: "http://en.wikipedia.org/wiki/Ts_eliot",
                   marker: {
                       symbol: 'url(images/Eliot-s.png)'
                          },
               },



                  {
                   name: 'Boris Karloff',
                    x: 1969,
                   y: 81,
                   profession: "Original Frankenstein's Monster",

                   photo: "images/Karloff.jpg",
                   link: "http://en.wikipedia.org/wiki/Boris_Karloff",
                   marker: {
                       symbol: 'url(images/Karloff-s.png)'
                          },
               },

            


               ]
           },
     





       ],


       /////////////////////////////////  SERIES END
    });
});


$(function () {
    
    
    var chart;

    $(document).ready(function() {
        Highcharts.setOptions({
     colors: ['#50B432', '#ED561B', '#DDDF00', '#24CBE5', '#64E572', '#FF9655', '#FFF263',      '#6AF9C4']
    });

        chart = new Highcharts.Chart({

            chart: {

                renderTo: 'container1',

                plotBackgroundColor: null,

                plotBorderWidth: null,

                plotShadow: false,
                spacingTop: 0,
            spacingLeft: 0,
            spacingRight: 0,
            spacingBottom: 0

            },

            title: {
                enabled: true,
                text: null,

            },

            tooltip: {

                formatter: function() {

                    return '<b>'+ this.point.name +'</b> '+ Math.round(this.percentage) +' %';

                }

            },

            plotOptions: {

                pie: {

                    allowPointSelect: true,

                    cursor: 'pointer',
                     showInLegend: false,
                     legend: {
                        verticalAlign: 'middle',
                        layout: 'vertical',
                align: 'right',
                enabled: true,

            },

                    dataLabels: {

                        enabled: true,

                        color: '#000000',

                        connectorColor: '#000000',

                        formatter: function() {

                            return '<b>'+ this.point.name +'</b> '+ Math.round(this.percentage) +' %';

                        }

                    }


                }

            },

            series: [{

                type: 'pie',

                name: 'Death share',

                data: [
                ['Stage + Film', 32.08],
                ['Writing', 10.16],
                ['Sports',  9.09],
                ['Math + Sciences', 2.67],
                ['Music',  24.06],
                ['Fine Arts', 10.69],
                ['Business + Politics', 11.22],


           /*
              data: [
                {type: 'Acting',
                percent: 50.0%,
              }, 

                {type: 'Writing',
                percent: 50.0%,
              },



/*
                 ],
                ['Writing',       10.0],
                ['Politics',       10.0],
                ['Math and Sciences',       20.0],
                ['Music',       25.00],
                ['Fine Arts',       10.00],
                ['Politics',       15.00],
*/
            ]

            }]

        });

    });
});



$(function () {
    Highcharts.setOptions({
     colors: ['rgb(5, 219, 194)', 'rgba(40, 40, 40,.8)', 'rgba(210, 221, 40,.8)', 'rgba(220, 240, 240,.9)', 'rgba(242, 62, 71,.8)','rgba(255, 165, 0,.8)']
    });

    $('#container2').highcharts({
        chart: {
            plotBackgroundColor: null,
           
            plotShadow: false,
            spacingTop: 0,
            spacingLeft: 0,
            spacingRight: 0,
            spacingBottom: 0
        },
        title: {
            text: null,
            enabled: false,
        },
        tooltip: {
            pointFormat: '{series.name}: <b>{point.y}%</b>'
        },
        plotOptions: {
            pie: {
                allowPointSelect: true,
                cursor: 'pointer',
                dataLabels: {
                    enabled: true,
                    format: '<b>{point.name}</b>: {point.y} %',
                    style: {
                        color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black'
                    }
                }
            }
        },
        series: [{
            type: 'pie',
            name: 'Death Share',
            data: [
                ['Alcohol',   31],
                ['Heroin',       8],
                ['Pills',    14],
                ['Cocaine',    13],
                ['Complications',   16],
                ['Tobacco',   18],
            ]
        }]
    });
});
    

    