# The Yatzy Kata.

Write a system to advise a Yatzy player on which category to mark a roll of 5 six-sided dice.

The input is the final combination of thrown dice, like: 4, 2, 4, 6, 1  
The output is the name of the Category to mark the score at: "Fours"

```
Example:
1, 2, 3, 4, 5  “Large Straight”
3, 3, 3, 5, 5  ”Full House”
2, 2, 2, 2, 2  "Yatzy" 
```

## Categories and Scoring Rules

If a player wants to mark a roll on a category, 
for which the roll does NOT meet the requirement for that category
then the player scores ZERO for that roll.


### Numbers: Ones, Twos, Threes, Fours, Fives, Sixes.
 
The player scores the sum of the dice that reads one, two, three, four, five or six, respectively. 
For example,
  - 1,1,2,4,4 placed on “fours” scores 8 (4+4) 
  - 2,3,2,5,1 placed on “twos” scores 4 (2+2) 
  - 3,3,3,4,5 placed on “ones” scores 0


### Three of a kind: 

If there are three dice with the same number, the player scores the sum of all the dice. 
For example, when placed on “three of a kind”
  - 3,3,3,3,1 scores 13 
  - 3,3,3,4,5 scores 18 
  - 3,3,4,5,6 scores 0 (Roll isn't a three-of-a-kind)

### Four of a kind: 

If there are four dice with the same number, the player scores the sum of all the dice. 
For example, when placed on “four of a kind”
  - 2,2,2,2,1 scores 11
  - 2,2,2,2,5 scores 13  
  - 2,2,2,5,5 scores 0 (Roll isn't a four-of-a-kind)


### - Full house: 

If the dice are two of a kind and three of a kind, the player scores 25 points. 
For example, when placed on “full house”
 - 1,1,2,2,2 scores 25
 - 5,5,5,6,6 scores 25
 - 4,4,3,3,1 scores 0



### Small straight: 

If the roll contains four consecutive numbers, the player scores 30 points.
 - 1,2,3,4,2 scores 30
 - 3,3,4,5,6 scores 30
 - 1,1,3,5,6 scores 0


### Large straight:
 
If the roll contains five consecutive numbers, the player scores 40 points.
 - 1,2,3,4,5 scores 40
 - 2,3,4,5,6 scores 40
 - 1,1,3,5,6 scores 0


### Yatzy: 

If all dice have the same number, the player scores 50 points. 
For example,
    - 1,1,1,1,1 placed on “yatzy” scores 50 
    - 1,1,1,2,1 placed on “yatzy” scores 0

### Chance: 

The player scores the sum of all dice, no matter what they read. 
For example,
  - 1,1,3,3,6 placed on “chance” scores 14 (1+1+3+3+6) 
  - 4,5,5,6,1 placed on “chance” scores 21 (4+5+5+6+1)



# Additional challenge

1. Change the advising system to take into consideration 'already' occupied catergories.
  Any category can only be marked once. (Except for Yatzy, which may be used three times)
2. Amend the advising system to take into consideration an additional bonus of 35 points given
  when the total number of point score in the 'Numbers-categories' exceeds 63 points.