# The Tennis Kata.

Write a system to help the umpire keep track of the score of a single Game in Tennis.

The umpires input is which player won a point.
The systems output is: The current score within the game.

```
Example:
Player one scores a point --> Score: 15-0
Player one scores a point --> Score: 30-0
Player two scores a point --> Score: 30-15
```


## Summary of Tennis Score Rules

1. A game is won by the first player to have won at least four points in total
    and at least two points more than the opponent. 
    The score is then “Win for player1” or “Win for player2”
2. The running score of each game is described in a manner peculiar to tennis: 
    scores from zero to three points are described as 
    “Love”, “Fifteen”, “Thirty”, and “Forty” respectively.
3. If at least three points have been scored by each player, 
    and the scores are equal, the score is “Deuce”.
4. If at least three points have been scored by each side 
    and a player has one more point than his opponent, 
    the score of the game is “Advantage player1” or “Advantage player2”.
    
    
