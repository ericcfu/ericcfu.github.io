
let color_index = 0;
const colors = ['#FFFFFF', '#FF0000', '#FF7F00', '#FFFF00', '#00FF00', '#0000FF', '#4B0082', '#9400D3']
// jquery stuff
$(document).ready(function () {
    // changing projects
    $('#minus-bias').click(function () {
        change_proj(0)
    });
    $('#tweet-analyzer').click(function () {
        change_proj(1)
    });
    // make the name change colors on click
    $('#name-title').click(function () {
        color_index = (color_index + 1) % colors.length;
        $('#name-title').css('color', colors[color_index]);
    });
    // changing the background color
    $('#background-color-change').click(function () {
        var color = prompt("Please enter a color hex code.", "#393d3f");
        $('#home').css('background-color', color);
    });
    // changing font weight of in text links upon hover
    $('.in-text-link').hover(function() {
        $(this).css('font-weight', 800);
    },
    function() {
        $(this).css('font-weight', 700);
    });
});

// typewriter effect on home page
const type_speed = 50;
let cur_text = 0;
let cur_index = 0;
let text_arr = ['Programmer', 'Hackathon Director', 'Software Engineer', 'Student']

function type() {
    if (cur_index < text_arr[cur_text].length) {
        document.getElementById("typewriter-bio").innerHTML += text_arr[cur_text].charAt(cur_index);
        cur_index++;
        setTimeout(type, type_speed);
    } else {
        setTimeout(function () {
            cur_text = (cur_text + 1) % text_arr.length;
            cur_index = 0;
            document.getElementById("typewriter-bio").innerHTML = '';
            setTimeout(type, type_speed);
        }, type_speed * 12)

    }
}

function start_typewriter() {
    document.getElementById("typewriter-bio").innerHTML = '';
    type()
}
window.onload = start_typewriter;

// supporting stuff for changing project info
let project_names = ['Minus Bias', 'Tweet Analyzer'];
let project_descs = ["An article emotion analyzer built into a chrome extensions. Utilizes an html/css front end, with flask and ajax to interface with a python webscraper and text emotion analyzer hosted on Google Cloud Platform. The emotion analyzer utilizes GCP's Natural Language Processing API.",
    "A quick side project exploring how to interface python and Java. Utilizes twitter's python api to pull tweets from a user as selected from the Java interface. Outputs the tweets in an easy to analyze format and analyzes the most popular words used by the individual."
];
let project_link = ['https://github.com/ericcfu/article-emotion-analyzer', 'https://github.com/ericcfu/TwitterScrapping4Lolz'];
let project_thumbnails = ['./assets/img/news.jpg', './assets/img/analysis.jpg']


function change_proj(project) {
    document.getElementById('project-name').innerHTML = project_names[project];
    document.getElementById('project-desc').innerHTML = project_descs[project];
    document.getElementById('project-image').href = project_link[project];
    document.getElementById('projects-thumbnail').src = project_thumbnails[project];
}
