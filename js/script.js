$(function () {
    $('#container').highcharts({
        chart: {
            zoomType: 'xy',
            type: 'area'
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
                    '<a href= " '+ this.point.link +' " + target="_blank"> Read more </a>' +

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
          color: 'rgba(0, 136, 204,.8)',
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
                  photo: "images/photos/trungpa-s.png",
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
                  photo: "images/photos/reed.jpg",
                  link: "http://en.wikipedia.org/wiki/lou_reed",
                  marker: {
                      symbol: 'url(images/reed-s.png)'
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
                  photo: "images/photos/Reed.jpg",
                  link: "http://en.wikipedia.org/wiki/Oliver_Reed",
                  marker: {
                      symbol: 'url(images/reed-s.png)'
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





              }],


      }, 

///////////////////////////////// HEROIN
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
                       symbol: 'url(images/c-blandick-s.png)',

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
                   photo: "images/photos/Fassbinder.jpg",
                   link: "http://en.wikipedia.org/wiki/Fassbinder",
                   marker: {
                       symbol: 'url(images/rainer-werner-fassbinder-s.png)',

                   }
                   }, {
                   name: 'Bam Bam Bigelow',
                    x: 2007,
                   y: 45,
                   profession: 'WWF Wrestler, BAM!',
                   photo: "images/photos/Bigelow.jpg",
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
                   photo: "images/photos/Porter.jpg",
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
                   photo: "images/photos/ruffin.jpg",
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
                   photo: "images/photos/d-Simpson.jpg",
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
                   photo: "images/photos/mays.jpg",
                   link: "http://en.wikipedia.org/wiki/Billy_Mays",
                   marker: {
                       symbol: 'url(images/may-s.png)'
                   },
                   },
                    {
                   name: 'Andy Gibb',
                    x: 1988,
                   y: 30,
                   profession: 'English Singer, Teen Idol',
                   photo: "images/photos/gibb.jpg",
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
                   photo: "images/photos/Farley.jpg",
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
                   photo: "images/photos/Mainwaring.jpg",
                   link: "http://en.wikipedia.org/wiki/Chris_Mainwaring",
                   marker: {
                       symbol: 'url(images/mainwaring-s.png)'
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
                   photo: "images/photos/barette.jpg",
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
                   photo: "images/photos/Jones.jpg",
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
                   name: 'Barbette',
                   x: 1973,
                   y: 74,
                   profession: 'Trapeze artist',
                   photo: "barette.jpg",
                   bio: "Barbette was an American female impersonator, high-wire performer, and trapeze artist born in Texas.",
                   link: "http://wikipedia.org/",

                   marker: {
                       symbol: 'url(images/barbette-s.png)'
                           }
               },


            {
                   name: 'Barbette',
                    x: 1973,
                   y: 74,
                   profession: 'Trapeze artist',
                   photo: "Aimee_Semple.jpg",
                   marker: {
                       symbol: 'url(images/barbette-s.png)'
                           }
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

                plotShadow: false

            },

            title: {

                text: 'Occupation Breakdown'

            },

            tooltip: {

                formatter: function() {

                    return '<b>'+ this.point.x +'</b>: '+ this.percentage +' %';

                }

            },

            plotOptions: {

                pie: {

                    allowPointSelect: true,

                    cursor: 'pointer',
                     showInLegend: true,
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

                            return '<b>'+ this.point.x +'</b> '+ this.percentage +' %';

                        }

                    }


                }

            },

            series: [{

                type: 'pie',

                name: 'Browser share',

                data: [
                ['Acting',   45.0, ],
                ['Writing',       26.8],
                ['Politics',       26.8],
                ['Math and Sciences',       26.8],
                ['Music',       26.8],
                ['Fine Arts',       26.8],
                ['Politics',       26.8],
                
            ]

            }]

        });

    });
});

$(function () {
    Highcharts.setOptions({
     colors: ['rgb(5, 219, 194)', 'rgba(40, 40, 40,.8)', 'rgba(210, 221, 40,.8)', 'rgba(220, 240, 240,.9)', 'rgba(242, 62, 71,.8)']
    });

    $('#container2').highcharts({
        chart: {
            plotBackgroundColor: null,
           
            plotShadow: false
        },
        title: {
            text: 'Substance Abuse Breakdown',
            enabled: true,
        },
        tooltip: {
            pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
        },
        plotOptions: {
            pie: {
                allowPointSelect: true,
                cursor: 'pointer',
                dataLabels: {
                    enabled: true,
                    format: '<b>{point.name}</b>: {point.percentage:.1f} %',
                    style: {
                        color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black'
                    }
                }
            }
        },
        series: [{
            type: 'pie',
            name: 'Browser share',
            data: [
                ['Alcohol',   45.0],
                ['Herion',       26.8],
                
                ['Pills',    8.5],
                ['Cocaine',     6.2],
                ['Combinations/Complications',   0.7]
            ]
        }]
    });
});
    

    