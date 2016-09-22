## Jot down your commands here!

For example, when prompted to ` create a directory in unit1/d02/morning called star_wars`, you'd write the following:

` mkdir star_wars `

### Act I

* In the `star_wars` folder, create two new directories: `empire` and `rebellion`.
<br>
mkdir empire
mkdir rebellion 

* Inside the `empire` directory, create a .txt file called `darth_vader`.
<br>
cd empire/
touch darth_vader.txt

* Use the force (or your knowledge of the command line) to add the text "...heavy breathing..." to the `darth_vader` file. (Don't remember how to do this? Review last night's homework or use the `other force`, known as Google!)
<br>
echo "...heavy breathing..." >> darth_vader.txt

* Inside the `empire` directory, create a .txt file called `emperor_palpatine`.
<br>
touch emperor_palpatine.txt

* Inside the `empire` directory, create a directory called `death_star`.
<br>
mkdir death_star

* Move `darth_vader` into the `death_star`.
<br>
mv darth_vader.txt death_star/

### Act II

* Move back to your `star_wars` directory, and enter the `rebellion` directory.
<br>
cd ../rebellion/

* Create a file called `princess_leia` and add the text "Help me, Obi-Wan...You're my only hope."
<br>
echo "Help me, Obi-Wan...You're my only home." >> princess_leia.txt

* Create a file called `obi_wan`.
<br>
touch obi_wan.txt

* Create a file called `luke_skywalker`.
<br>
touch luke_skywalker.txt

* Create a directory called `millenium_falcon`.
<br>
mkdir millenium_falcon

* Inside the `millenium_falcon`, create two files: `han_solo` and `chewy`.
<br>
cd millenium_falcon
touch han_solo.txt chewy.txt

* Move `luke_skywalker`, `obi_wan`, and `princess_leia` into the `millenium_falcon`.
<br>
cd rebellion 
mv *.txt millenium_falcon/ 

* Move the `millenium_falcon` into the `death_star`.
<br>
mv millenium_falcon/ ../empire/death_star/

### Act III

* Unload the Millenium Falcon! Move the whole crew from the `millenium_falcon` directory into the `death_star` directory.
<br>
cd ../empire/death_star/millenium_falcon/
mv *.txt ../

* `darth_vader` has defeated `obi_wan`! Delete poor `obi_wan`.
<br>
rm obi_wan.txt

* Our heroes have disabled the tractor beam! Move the whole crew back into the `millenium_falcon`! Remember: `darth_vader` remains in the `death_star` and `emperor_palpatine` is still in the `empire`.
<br>
mv chewy.txt han_solo.txt luke_skywalker.txt princess_leia.txt millenium_falcon/

* Move the `millenium_falcon` back into the `rebellion` directory.
<br>
mv millenium_falcon/ ../../rebellion/

* `darth_vader` leaves the `death_star` to persue Luke! Move him from the `death_star` into the `empire` directory!
<br>
mv darth_vader.txt ../

* Thanks to his practice back home at Beggar's Canyon, Luke blew up the `death_star`! Remove it from the galaxy! :boom:
<br>
rm -r death_star/
