class Candidate{

constructor(){

    this.name = null
    this.score = 0
    this.time = 0
    this.index = null

}

getCount(){

    var getCountRef = database.ref('candidateCount')
    getCountRef.on("value", function(data){

        candidateCount = data.val()
    })
}

updateCount(count){

    database.ref('/').update({

        candidateCount : count
    })
}

update(){

    var canIndex = "candidates/candidate" + candidateCount
    database.ref(canIndex).set({

        name: this.name
    })
}
}