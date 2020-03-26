# Wikivis

[wikivis](https://sventers.github.io/wikivi)

## Intro

I adapted anvaka's pm (package_manager)
  
  - [pm - github](https://github.com/anvaka/pm) 
  - [pm - demos](http://anvaka.github.io/pm/#/)
  
to some wikipedia link clusters. There are some other interesting implementations he build out as well like

- [github users cerca 2015](https://github.com/anvaka/allgithub)
- [word2vec feat glove](https://github.com/anvaka/word2vec-graph)

Thanks you anvaka for such a nice visualization package!

## About wikivis data

The prebuild data can be found it this repository 

- [demo_data](https://github.com/sventers/wikivis_demo_data)

The biggest [visualization](https://sventers.github.io/wikivis/#/galaxy/plinksnoroot?cx=0&cy=0&cz=0&lx=0.0000&ly=0.0000&lz=0.0000&lw=1.0000&ml=150&s=1.75&l=1&v=v1data) (4.4 mil edges) I have build is from pulling links from all the pages in the [pantheon dataset](https://dataverse.harvard.edu/dataset.xhtml?persistentId=doi:10.7910/DVN/28201)

But honestly some of the smaller ones are more interesting

Data was build from pywikibot api calls and taking the links off the root (visualization title) page and all the links off those 1 degree linked pages and you can see the root page is basically always the center of the galaxy as it should be.

I'm not sure how much there is to objectively learn from the visualizations, but they are pretty and it's really nice to see the datasets you have been building

## Next Steps

For more data, I want to experiment with different sets of pages for link seeds, and makea metric of which pages should be pursued for the next apicall relative to things needing to understand the pages in the seedset.

Visualization wise, I still have no idea how the js works, so poking around a bit with 

- variable link weights 
- and some colors 
- and pictures/embedded video instead of nodes in the visualization
- or maybe adding weight to the links when its building with [allpypi](https://github.com/anvaka/allpypi), but probably just better to start using the more functional versions of ngraph

would probably be where i start investigate