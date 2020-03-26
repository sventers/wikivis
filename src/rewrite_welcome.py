
from pprint import pprint as pp



pages_asof_mar26_2020= [
        "prince_henry",
        "alex_ferguson",
        "dennis_ritchie",
        "kristin_neff",
        "Jean_Hoerni",
        "Turing_Award",
        "Ada_Lovelace",
        "Hacker_house",
        "Non-blocking_algorithm",
        "Kumadi_Forest_Park",
        "pantheonlinks",
        "plinksnoroot",
        "Love",
        "Epistemology",
        "Super_Bowl",
        "Edsger_W._Dijkstra",
        "Pete_Buttigieg",
        "The_Quiet_American",
        "My_Struggle_(Knausgård_novels)",
        "Clingmans_Dome",
        "Action_language",
        "Table_of_mathematical_symbols_by_introduction_date",
        "Turing_Award",
        "List_of_Young_Global_Leaders",
        "Frame_semantics_(linguistics)",
        "European_colonization_of_the_Americas"
    ]


p1 = """
import React from "react";
import Destination from './destination.jsx';

export default class WelcomePage extends React.Component {
  render() {
    return (
      <div className='container'>
        <h1>Hey, Here are some foreward link networks from wikipedia</h1>
        <h2>Choose one:</h2>
        <div className='media-list'>
"""


def build_Destination_element(elementname):
  element = """<Destination description='%s'
                      href='#/galaxy/%s?l=1'
                      name='%s World'
                      // media='bower_fly_first.png'
                      />
                      
                      """
  return element % (elementname, elementname, elementname)

p3 = """
        </div>
      </div>
    );
  }
}
"""

output = p1

for page in pages_asof_mar26_2020:
  output += build_Destination_element(page)
  # print (output[-100:])

output += p3

# print (output)

print("writing to file")
with open("welcome.jsx", "w") as guidefile:
  guidefile.write(output)