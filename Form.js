class Form {

    constructor() {
      this.input = createInput("Name");
      this.button = createButton('Start');
      this.title = createElement('h2');
      
      this.count = 0

    }
    hide(){
      
      this.button.hide();
      this.input.hide();
      this.title.hide();
    }

    display(){
      this.title.html("Drivers Test");
      this.title.position(displayWidth/2 - 50, 100);

      this.input.position(displayWidth/2 - 40 , displayHeight/2 - 80);
      this.button.position(displayWidth/2 + 30, displayHeight/2);

      this.button.mousePressed(()=>{
      //input.hide();
      //button.hide();

      console.log(candidateCount)
      candidateCount = candidateCount + 1
      candidate.updateCount(candidateCount)
      candidate.name = this.input.value()
      candidate.update()
      this.input.hide()
      this.button.hide()

      gameState = 1
      game.update(1)

      });
  
    }

    questions(){

      gameState = 2

      //SELECTED OPTIONS
      var s1, a1

      this.count = this.count + 1
      if(this.count === 1){

        //FIRST QUESTION
      var q1 = createElement('h3');
      q1.html("What is the minimum age for driving a motorcycle without gear?")
      q1.position(150, 150)
      var op1 = createRadio()
      op1.position(150, 200)
      op1.option("16 years")
      op1.option("18 years")
      op1.option("21 years")

      a1 = "16 years"
      
      }

      else if(this.count === 2){

        //SECOND QUESTION
      var q2 = createElement('h3');
      q2.html("What should you do when you see a traffic sign of a school nearby?")
      q2.position(150, 150)
      var op2 = createRadio()
      op2.position(150, 200)
      op2.option("Stop the vehicle")
      op2.option("Slow down and proceed carefully")
      op2.option("Press horn and proceed in the same speed")

      }

      var button = createButton('Next');

      button.position(displayWidth/2 , displayHeight/2 - 50);
      button.mousePressed(() => {
        
        s1 = op1.value()
        console.log(s1)
        if(a1 === s1){

          score = score + 100
        }

        q1.hide()
        op1.hide()

        gameState = 1
        button.hide()
      })
      
      var button1 = createButton('Next');
      
    }
}