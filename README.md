# ProfessorSearch

ProfessorSearch is a tool made so that finding professors and classes that you may be interested in
on campus is as easy as possible to search for. Personally, I've found that I've had large gaps in 
between my classes where it would be inconvenient to go all the way back home to do some homework 
but also have nothing to do on campus, so I started going to other professor's lectures to see what
they were discussing in class.

However, I ran into a small problem being that there isn't really a good way to find the class times
for various different subjects easily. You would have to go into the SIS module on one.IU, log in to 
IU, do 2fa with Duo, load up class search which takes a good 1-5 minutes and then use their search
to try and find a good lecture to sit in.

To me, this isn't very intuitive at all; especially because I hate Duo and want to use it as least
as possible. Trying to use SIS on mobile is a nightmare and if you're able to actually get to the
class search section, the filters are incredibly unintuitive to use.

## Why might you want to search for a certain class or professor?
- Have free time and want to listen to an interesting lecture?
- Wanting to talk to a professor about a certain topic?
- Want to meet up with a professor and discuss possibilities about doing some research with them?

and probably a ton more reasons...

## Want to Contribute?

The codebase for ProfessorSearch is very easy to navigate, Server Side code is identified by 
whether or not there is a corresponding *.js or *.ts file for the *.svelte file. Svelte is used
for templating out the front end.

As of right now, there are two routes / and /professor/[string] where the string can be anything
and as long as a professor's name matches within 75% of the query, their class times will be listed.

The main page, under the route / demarked by the first '+page.svelte' is meant to serve as the page
where users can search a professor's name and be redirected to the right /professor/[string] page.

The class times can be found in the data/ folder which also contains class times from previous
semesters.

##### Side Note: I will probably setup a Github Action to auto download and compile class times
##### so that shouldn't recurring issue.
