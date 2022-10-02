

btn.onclick = function(){
    
    main.innerHTML = "";
    
    for(let i = 0; i<data.length; i++){
        if(text.value == data[i]["음식점이름"] || 
        text.value == data[i]["분류"] || 
        text.value == data[i]["세분류"] || 
        text.value == data[i]["메뉴1"] || 
        text.value == data[i]["메뉴2"] || 
        text.value == data[i]["메뉴3"]){
            main.innerHTML +=    
            `
                <a class = "card_link" href="${data[i]["링크"]}" target = "_blank">
                <div class = "card">
                    <span class = "res_name">${data[i]["음식점이름"]}</span><br/>
                    <div class = "container">
                        <img class = "img" src = "../img/${data[i]["사진"]}"/>
                        <pre class = "info">
#${data[i]["분류"]} #${data[i]["세분류"]} 
대표 가격 : ${data[i][" 대표 가격 "].toLocaleString()}원
평점 : ${data[i]["평점(5점)"]} / 5.0 
거리 : ${data[i]["거리(미터)"]}m 걸어서 ${data[i]["시간(분)"]}분
메뉴1 : ${data[i]["메뉴1"]} 
메뉴2 : ${data[i]["메뉴2"]} 
메뉴3 : ${data[i]["메뉴3"]}
                        </pre>
                    </div>
                </div>
            </a>
            `;
        }
    }
}
