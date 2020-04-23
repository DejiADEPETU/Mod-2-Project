# Mod-2-Project
Project2/Perscholas

## Which 3rd party API I'm using:
api.repo.nypl.org/



## Problem statement:
### fibn: Find Inspiring Books Now. 
- An app that finds inspiring books for readers in their area(s) of interest form the collections at the Newyork Public Library. 

## Target users:
Avid readers and discerning buyers.

## Wireframe

##### This shows both the overall look as well as some of the intro page

##### Welcome Screen  [Also Doubles as the search/input screen]
![IntroPage](images/fibn_intro.PNG)

##### This shows both the overall look of a since paged Web-App (with a minimun of 5 components) populated via an api fetching data from a server
![Overview](images/fibn_singlePagewebAppOverview.PNG)


* Component Breakdown:
- Stateful Components:
    - (a) App.js [Populates components to the DOM]
    - (b) Book Search based on deired criteria [fetched from server]
    - (c) Genre comparisims of "Users-Selected" Titles against the ones from the Api
    


- Functional Component:
    - (a) confirmation box/lightboxes/modal
    - (b) archieve of Searches
    - (c) Genre comparisims of "Users-Selected" Titles against the ones from the Redux

- *** FUTURE WORK  ***
    - (a) User Authentication   
    - (b) User Profiles [form USERS data]
    - (c) Book Recommendations Based on Past User Behaviour
