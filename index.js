class pokerCard
{
    constructor(rank,suit)
    {
        this.rank = rank
        this.suit = suit
    }
    toString()
    {
        return(this.getRank()+" "+this.getSuit())
    }
    getRank()
    {
        return this.rank
    }
    getSuit()
    {
        return this.suit
    }

}
class deck
{
    
     
    constructor()
    {
        this.pokerCards = []  
    }
    createDeck()
    {
        var ranks = [2,3,4,5,6,7,8,9,10,"Jack","Queen","King","Ace"] 
        var suits = ["Spades","Diamonds","Clubs","Hearts"]

       for(let r = 0;r<13;r++)
       {
        for(let s = 0;s<4;s++)
        {
            
            var playingCard = new pokerCard(ranks[r],suits[s]) 
            //console.log("card is: " + playingCard.getRank() +playingCard.getSuit())
            //console.log("card is: " + playingCard.toString())
            this.pokerCards.push(playingCard)
        }
       }
       
    }
    shuffle()
    {
        this.pokerCards = this.pokerCards.sort(() => Math.random() - 0.5)
    }
    toString()
    {   
        for (let i = 0; i<this.pokerCards.length;i++)
        {
            console.log("Card is:" +this.pokerCards[i].getRank() + " of " +this.pokerCards[i].getSuit())
        }
       
    }
    draw(playerHand)
    {
        playerHand.push(this.pokerCards.pop())
    }

}
class warGame
{
    constructor()
    {
        
        this.player1Hand = []
        this.player2Hand = []
        this.player1Points = 0 
        this.player2Points = 0 
        this.gameStatus = true
        this.setUpGame()
        this.startGame()
        //console.log(Object.values(this.player1Hand[0])[0])
       // console.log(Object.values(this.player1Hand[0])[1])
    }
    setUpGame()
    {
        var warDeck = new deck()
        warDeck.createDeck()
        warDeck.shuffle()
        for(let i = 0;i<26;i++)
        {
            warDeck.draw(this.player1Hand)
        }
        for(let j = 0;j<26;j++)
        {
            warDeck.draw(this.player2Hand)
        }
        
       // console.log(this.player1Hand)
       // console.log(this.player2Hand)
    }
    
    startGame()
    {
        
        var roundWinner
        while (this.gameStatus == true)
        {   
            for(var g = 0;g<26;g++)
            {
                roundWinner = this.compareCards(Object.values(this.player1Hand[g])[0],Object.values(this.player2Hand[g])[0])
                if (roundWinner == 1)
                {
                    console.log("Player 1 wins round: "+(g+1))
                    this.player1Points += 1
                }
                else if(roundWinner == 2)
                {
                    console.log("Player 2 wins round: "+(g+1))
                    this.player2Points += 1
                }
                else if(roundWinner == 3)
                {
                    console.log("Tie no one gets points")
                }   
            }

            this.gameStatus = false
            
        }

            if(this.player1Points > this.player2Points)
            {
                console.log("Final Score: Player1:" + this.player1Points + " Player2:" +this.player2Points )
                console.log("Player 1 wins the game with "+ this.player1Points + " points")
            }
            else if(this.player1Points < this.player2Points)
            {   console.log("Final Score: Player1:" + this.player1Points + " Player2:" +this.player2Points )
                console.log("Player 2 wins the game with "+ this.player2Points + " points")  
            }
            else if(this.player1Points == this.player2Points)
            {   console.log("Final Score: Player1:" + this.player1Points + " Player2:" +this.player2Points )
                console.log("Both players have the same score no one wins")  
            }
            
    }
    
    compareCards(player1Card,player2Card)
    {
        let player1HandValue = 0
        let player2HandValue = 0
        if(player1Card == "ace")
        {
            player1HandValue = 13
        }
        else if(player1Card == "King")
        {
            player1HandValue = 12
        }
        else if(player1Card == "Queen")
        {
            player1HandValue = 11
        }
        else if(player1Card == "Jack")
        {
            player1HandValue = 10
        }
        else if(player1Card == 9)
        {
            player1HandValue = 9
        }
        else if(player1Card == 8)
        {
            player1HandValue = 8
        }
        else if(player1Card == 7)
        {
            player1HandValue = 7
        }
        else if(player1Card == 6)
        {
            player1HandValue = 6
        }
        else if(player1Card == 5)
        {
            player1HandValue = 5
        }
        else if(player1Card == 4)
        {
            player1HandValue = 4
        }
        else if(player1Card == 3)
        {
            player1HandValue = 3
        }
        else if(player1Card == 2)
        {
            player1HandValue = 2
        }

        //player2 Check

        if(player2Card == "ace")
        {
            player2HandValue = 13
        }
        else if(player2Card == "King")
        {
            player2HandValue = 12
        }
        else if(player2Card == "Queen")
        {
            player2HandValue = 11
        }
        else if(player2Card == "Jack")
        {
            player2HandValue = 10
        }
        else if(player2Card == 9)
        {
            player2HandValue = 9
        }
        else if(player2Card == 8)
        {
            player2HandValue = 8
        }
        else if(player2Card == 7)
        {
            player2HandValue = 7
        }
        else if(player2Card == 6)
        {
            player2HandValue = 6
        }
        else if(player2Card == 5)
        {
            player2HandValue = 5
        }
        else if(player2Card == 4)
        {
            player2HandValue = 4
        }
        else if(player2Card == 3)
        {
            player2HandValue = 3
        }
        else if(player2Card == 2)
        {
            player2HandValue = 2
        }

        if(player1HandValue > player2HandValue)
        {
            return 1
        }
        else if (player1HandValue < player2HandValue)
        {
            return 2 
        }
        else if (player1HandValue == player2HandValue)
        {
            return 3 
        }

    }
}

var game1 = new warGame()


//var warDeck = new deck()
//warDeck.createDeck()
//warDeck.toString()
//var memecard = new pokerCard("King","Hearts")
//console.log(memecard.toString())
/*
var memecard = new pokerCard(1,2)
memecard.toString()
console.log(memecard.getRank())
var memeDeck = new deck()
memeDeck.toString()
console.log(memeDeck)
memeDeck.shuffle()
memeDeck.toString()
console.log("I DRAW: "+memeDeck.draw())
memeDeck.toString()

var game1 = new warGame()
//console.log(game1.player1Hand)


//console.log(warDeck.pokerCards[0].getRank());
warDeck.toString()


var temp = []
warDeck.draw(temp)
//temp.push(warDeck.draw())
console.log(temp)
*/