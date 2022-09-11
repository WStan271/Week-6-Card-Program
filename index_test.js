var expect = chai.expect;

describe('Test Functions',function(){
    
    describe("getRank",function(){
        it("Should return a string of the card rank",function(){
            let testCard = new pokerCard("King","Hearts")
            let x = testCard.getRank()
            expect(x).to.equal("King")

        })
    }) 
    describe("getSuit",function(){
        it("Should return a string of the card suit",function(){
            let testCard = new pokerCard("King","Hearts")
            let x = testCard.getSuit()
            expect(x).to.equal("Hearts")
    
        })
    }) 
    describe("toString",function(){
        it("Should return a array of the card rank+suit",function(){
            let testCard = new pokerCard("King","Hearts")
            let x = testCard.toString()
            expect(x).to.equal("King"+" "+"Hearts")
    
        })
    }) 
    describe("createDeck",function(){
        it("Should Create a Deck of 52 cards",function(){
            let testDeck = new deck()
            testDeck.createDeck()
            let size = testDeck.pokerCards.length
            expect(size).to.equal(52)
    
        })
    }) 
    describe("Shuffle",function(){
        it("Should shuffle a deck of cards",function(){
            let testDeck = new deck()
            testDeck.createDeck()
            let temp1 = testDeck.pokerCards[0]
            testDeck.shuffle()
            let temp2 = testDeck.pokerCards[0]
            expect(temp1).to.not.equal(temp2)
    
        })
    })
    describe("Draw",function(){
        it("Should take last card of deck and add to player hand",function(){
            let testDeck = new deck()
            testDeck.createDeck()
            let temp1 = testDeck.pokerCards[51]
            let tempHand =[]
            testDeck.draw(tempHand)
            let temp2 = tempHand[0]
            expect(temp1).to.equal(temp2)
        })
    })
    describe("SetUpGame",function(){
        it("Should deal 26 cards to each players hand",function(){
            let testGame = new warGame()
            testGame.setUpGame()
            expect(testGame.player1Hand.length).to.equal(testGame.player2Hand.length)
        })
    })
    describe("StartGame",function(){
        it("Should begin the game then end when finished",function(){
            let testGame = new warGame()
            testGame.startGame()
            expect(testGame.gameStatus).to.equal(false)  
        })
    })
    describe("compareCards",function(){
        it("Should return 2 which means player 2 won",function(){
            let testGame = new warGame()
            let temp = testGame.compareCards(1,2)
            expect(temp).to.equal(2)
        })
    })
    

})




