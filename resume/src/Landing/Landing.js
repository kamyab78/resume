import React, { Component } from 'react'
import './Landing.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import Linkedin from './linkedin-icon.png'
import Email from './Other-Mail-Metro-icon.png'
import Phone from './Phone-icon.png'
import Skype from './Skype-icon.png'
import Particles from 'react-particles-js';
import Back from './header.png'
import { Navbar, Nav, Button } from 'react-bootstrap';
import chargeSample from './MaryamGhassemi.pdf';
var ip = ''
class Landing extends Component {
    componentDidMount() {
        $(document).ready(function () {
            var d = new Date()
      var time=  d.getHours()+":"+d.getMinutes()+":"+d.getSeconds()
      console.log(time)
            $.getJSON("https://api.ipify.org?format=json",
                function (data) {
                    console.log(data.ip);
                    ip = data.ip
                })
            setTimeout(function () {
                var settings = {
                    "url": "http://127.0.0.1:8000/create/",
                    "method": "POST",
                    "timeout": 0,
                    "headers": {
                        "accept": "application/json",
                        "Access-Control-Allow-Origin": "*",
                        "Access-Control-Allow-Headers": "*",
                        "Content-Type": "application/json"
                    },
                    "data": JSON.stringify({
                        "ip_address": ip,
                        "time_visit":time
                    }),
                };
                $.ajax(settings).done(function (response) {
                    console.log(response)
                });
            }, 2000);
            $("#about").click(function () {
                var elmnt = document.getElementById("about_page");
                elmnt.scrollIntoView({ behavior: 'smooth' });
            })
            $("#education").click(function () {
                var elmnt = document.getElementById("education_page");
                elmnt.scrollIntoView({ behavior: 'smooth' });
            })
            $("#work").click(function () {
                var elmnt = document.getElementById("work_page");
                elmnt.scrollIntoView({ behavior: 'smooth' });
            })
            $("#skill").click(function () {
                var elmnt = document.getElementById("skill_page");
                elmnt.scrollIntoView({ behavior: 'smooth' });
                setTimeout(function () {
                    $('#title1').fadeIn('slow')
                }, 200);
                setTimeout(function () {
                    $('#row_one').fadeIn('slow')
                }, 400);
                setTimeout(function () {
                    $('#row_two').fadeIn('slow')
                }, 600);
                setTimeout(function () {
                    $('#row_three').fadeIn('slow')
                }, 800);
                setTimeout(function () {
                    $('#title2').fadeIn('slow')
                }, 1000);
                setTimeout(function () {
                    $('#row_four').fadeIn('slow')
                }, 1200);
                setTimeout(function () {
                    $('#row_five').fadeIn('slow')
                }, 1400);
                setTimeout(function () {
                    $('#row_six').fadeIn('slow')
                }, 1600);
                setTimeout(function () {
                    $('#row_seven').fadeIn('slow')
                }, 1800);
                setTimeout(function () {
                    $('#row_eight').fadeIn('slow')
                }, 2000);
                setTimeout(function () {
                    $('#row_nine').fadeIn('slow')
                }, 2000);
            })
            $("#linkedin").click(function () {
                window.open("https://www.linkedin.com/in/maryam-ghassemi-993085155/")
            })
            $(".yek").hover(function () {
                $(this).css("background-color", "white");
                $(".circle_one").css("background-color", '#f3c623');
                $(".circle_one").css("border", "4px solid #f3c623");
                $(".circle_one").css("z-index", "999");
                $(".triangle").css("border-right", "30px solid  white");

            }, function () {
                $(this).css("background-color", "#f0f2f7");
                $(".circle_one").css("background-color", "gray");
                $(".circle_one").css("border", "4px solid gray");
                $(".triangle").css("border-right", "30px solid transparent");
            });
            $(".do").hover(function () {
                $(this).css("background-color", "white");
                $(".circle_two").css("background-color", "#f3c623");
                $(".circle_two").css("border", "4px solid #f3c623");
                $(".circle_two").css("z-index", "999");
                $(".triangle1").css("border-left", "30px solid  white");

            }, function () {
                $(this).css("background-color", "#f0f2f7");
                $(".circle_two").css("background-color", "gray");
                $(".circle_two").css("border", "4px solid gray");
                $(".triangle1").css("border-left", "30px solid transparent");
            });
            $(".se").hover(function () {
                $(this).css("background-color", "white");
                $(".circle_three").css("background-color", "#f3c623");
                $(".circle_three").css("border", "4px solid #f3c623");
                $(".circle_three").css("z-index", "999");
                $(".triangle2").css("border-right", "30px solid  white");

            }, function () {
                $(this).css("background-color", "#f0f2f7");
                $(".circle_three").css("background-color", "gray");
                $(".circle_three").css("border", "4px solid gray");
                $(".triangle2").css("border-right", "30px solid transparent");
            });
            $(".char").hover(function () {
                $(this).css("background-color", "white");
                $(".circle_four").css("background-color", "#f3c623");
                $(".circle_four").css("border", "4px solid #f3c623");
                $(".circle_four").css("z-index", "999");
                $(".triangle3").css("border-left", "30px solid  white");

            }, function () {
                $(this).css("background-color", "#f0f2f7");
                $(".circle_four").css("background-color", "gray");
                $(".circle_four").css("border", "4px solid gray");
                $(".triangle3").css("border-left", "30px solid transparent");
            });
            $("#download").click(function () { 
                var settings = {
                    "url": "http://127.0.0.1:8000/visited/",
                    "method": "POST",
                    "timeout": 0,
                    "headers": {
                        "accept": "application/json",
                        "Access-Control-Allow-Origin": "*",
                        "Access-Control-Allow-Headers": "*",
                        "Content-Type": "application/json"
                    },
                    "data": JSON.stringify({
                        "ip_address": ip,
                        "visit":'1',
                        "time_visit":time
                    }),
                };
                $.ajax(settings).done(function (response) {
                    console.log(response)
                });
                window.open(chargeSample) })
            $(window).scroll(function () {
                var height = $(window).scrollTop();
                var sp = document.getElementById("skill_page");

                if (height >= sp.offsetTop - 500) {
                    setTimeout(function () {
                        $('#title1').fadeIn('slow')
                    }, 200);
                    setTimeout(function () {
                        $('#row_one').fadeIn('slow')
                    }, 400);
                    setTimeout(function () {
                        $('#row_two').fadeIn('slow')
                    }, 600);
                    setTimeout(function () {
                        $('#row_three').fadeIn('slow')
                    }, 800);
                    setTimeout(function () {
                        $('#title2').fadeIn('slow')
                    }, 1000);
                    setTimeout(function () {
                        $('#row_four').fadeIn('slow')
                    }, 1200);
                    setTimeout(function () {
                        $('#row_five').fadeIn('slow')
                    }, 1400);
                    setTimeout(function () {
                        $('#row_six').fadeIn('slow')
                    }, 1600);
                    setTimeout(function () {
                        $('#row_seven').fadeIn('slow')
                    }, 1800);
                    setTimeout(function () {
                        $('#row_eight').fadeIn('slow')
                    }, 2000);
                    setTimeout(function () {
                        $('#row_nine').fadeIn('slow')
                    }, 2000);
                }
            })
        })
    }
    render() {
        return (
            <div class="row " style={{ backgroundColor: '#f7f7f7', width: '220vh' }}>
                <Navbar fixed="top" expand="lg" style={{ backgroundColor: 'rgb(128, 128, 128 , 0.5)' }}>

                    <Navbar.Toggle aria-controls="basic-navbar-nav" style={{ backgroundColor: 'white', color: 'white' }} />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Link id="about" style={{ color: 'rgb(0, 0, 0 , 0.7)', fontSize: '20px', marginLeft: '25vh' }}>About</Nav.Link>
                            <Nav.Link id="education" style={{ color: 'rgb(0, 0, 0 , 0.7)', fontSize: '20px', marginLeft: '25vh' }}>
                                Education
                                </Nav.Link>
                            <Nav.Link id="work" style={{ color: 'rgb(0, 0, 0 , 0.7)', fontSize: '20px', marginLeft: '25vh' }}>Work Exprience</Nav.Link>
                            <Nav.Link id="skill" style={{ color: 'rgb(0, 0, 0 , 0.7)', fontSize: '20px', marginLeft: '25vh' }}>
                                Skills
                                </Nav.Link>

                        </Nav>

                    </Navbar.Collapse>
                </Navbar>
                <div class="col-lg-12 main">
                    <div className='land'>

                        <div className='land_dark'>

                            <Particles height='100vh'

                                params={{

                                    "particles": {
                                        "number": {
                                            "value": 250
                                        },
                                        "size": {
                                            "value": 5
                                        },
                                        "color": {
                                            "value": "#95389e"
                                        },
                                    },
                                    "interactivity": {
                                        "events": {
                                            "onHover": {
                                                "enable": true,
                                                "mode": "repulse"
                                            }
                                        }
                                    }
                                }}
                            >

                            </Particles>
                            <div className='center'>


                                <h1 className='name'> I'm Maryam Ghassemi</h1>
                                <div >

                                    <img id='linkedin' src={Linkedin} className='icon'></img>
                                    <img src={Email} className='icon'></img>
                                    <img src={Skype} className='icon'></img>
                                    <img src={Phone} className='icon'></img>
                                </div>

                            </div>







                        </div>
                    </div>
                    <div id='about_page' className='about'>
                        <h1 className='title_about'>About</h1>
                        <div style={{ height: '74vh', marginTop: '50px', width: '70%', marginLeft: '120px' }}>
                            <h1 style={{ fontSize: '21px' }}>ddddddddddddd</h1>
                            <h1 style={{ fontSize: '21px' }}>wwwwwww</h1>
                            <h1 style={{ fontSize: '21px' }}>ddddddddddddd</h1>
                            <h1 style={{ fontSize: '21px' }}>wwwwwww</h1>
                            <div className='left_column'></div>
                            <div className='center_column'>
                                <div className='info'></div>
                                <a style={{ color: 'white' }}  ><Button variant="danger" style={{ width: '300px', height: '50px', marginLeft: '50px' }} id='download' >Download Resume</Button></a>
                            </div>
                            <div className='right_column'>
                                <h1 style={{ textAlign: 'center', fontSize: '30px', color: 'black' }}>Hobbies & Interests</h1>
                                <div style={{ position: 'absolute', marginTop: '30px', height: '90px', width: '90px', backgroundColor: 'rgb(167, 157, 157,0.5)', marginLeft: '10px' }}>
                                    <h1 style={{ textAlign: 'center' }}>🎻</h1>
                                    <h1 style={{ textAlign: 'center', fontSize: '20px', paddingTop: '5px' }}>Violin</h1>
                                </div>
                                <div style={{ position: 'absolute', marginTop: '30px', height: '90px', width: '90px', backgroundColor: 'rgb(167, 157, 157,0.5)', marginLeft: '160px' }}>
                                    <h1 style={{ textAlign: 'center' }}>📷</h1>
                                    <h1 style={{ textAlign: 'center', fontSize: '15px', paddingTop: '12px' }}>Photography</h1>
                                </div>
                                <div style={{ position: 'absolute', marginTop: '30px', height: '90px', width: '90px', backgroundColor: 'rgb(167, 157, 157,0.5)', marginLeft: '310px' }}>
                                    <h1 style={{ textAlign: 'center' }}>🏐</h1>
                                    <h1 style={{ textAlign: 'center', fontSize: '15px', paddingTop: '12px' }}>Sport</h1>
                                </div>
                            </div>


                        </div>
                    </div>
                    <div id='education_page' className='education'>

                        <div >
                            <div className='title_edu'>Education</div>
                            <div className='title_pro'>Selected Project</div>
                        </div>
                        <div style={{ paddingTop: '200px' }}>
                            <div className='line'>
                                <div >
                                    <div className='circle_yek'></div>
                                    <div className='mosalas'></div>
                                    <div className='yek_yek'>
                                        <h1 style={{ fontSize: '23px', fontWeight: 'bold' }}>Number Classifier Neural Network</h1>
                                        <h1 style={{ fontSize: '17px' }}>using python . Fall 2019</h1>
                                        <h1 style={{ fontSize: '12px' }}>Collected Persian handwritten similar to MNIST and Developed</h1>
                                    </div>
                                </div>
                                <div >
                                    <div className='circle_do'></div>
                                    <div className='mosalas1'></div>
                                    <div className='do_do'>
                                        <h1 style={{ fontSize: '23px', fontWeight: 'bold' }}>Critics and Suggestion System</h1>
                                        <h1 style={{ fontSize: '17px' }}>using MYSQL as DataBase and SpringBoot . Spring 2019</h1>
                                        <h1 style={{ fontSize: '13px' }}> Designed</h1>

                                    </div>
                                </div>
                                <div >
                                    <div className='circle_se'></div>
                                    <div className='mosalas2'></div>
                                    <div className='se_se'>
                                        <h1 style={{ fontSize: '23px', fontWeight: 'bold' }}>Simple Topic Detectorr</h1>
                                        <h1 style={{ fontSize: '17px' }}>using MATLAB .Fall 2018</h1>
                                        <h1 style={{ fontSize: '13px' }}>Developed</h1>
                                    </div>
                                </div>
                                <div >
                                    <div className='circle_char'></div>
                                    <div className='mosalas3'></div>
                                    <div className='char_char'>
                                        <h1 style={{ fontSize: '23px', fontWeight: 'bold' }}>LL1 Compiler</h1>
                                        <h1 style={{ fontSize: '17px' }}>for pseudo C language. Fall 2018</h1>
                                        <h1 style={{ fontSize: '13px' }}> Designed and Implement</h1>
                                    </div>
                                </div>
                                <div >
                                    <div className='circle_panj'></div>
                                    <div className='mosalas4'></div>
                                    <div className='panj_panj'>
                                        <h1 style={{ fontSize: '20px', fontWeight: 'bold' }}>Human vocal cords through autocorrelation technique detector using PDA</h1>
                                        <h1 style={{ fontSize: '17px' }}>AVR processor .Fall 2017</h1>
                                        <h1 style={{ fontSize: '13px' }}>Developed</h1>
                                    </div>
                                </div>
                            </div>

                            <div className='one_edu'><h1>2015-2019</h1></div>
                            <div className='t1'></div>
                            <div className='h1_edu1'>
                                <h1 className='edu1'>B.Sc.in Computer Engineering (Software Engineering) </h1>
                                <h1 className='edu1_1' >Department of Electrical and Computer Engineering, Faculty of Engineering,  Shahid Beheshti University, Tehran, Iran</h1>
                                <h1 className='edu1_2' >Last two years gpa:  </h1>
                            </div>

                            <div className='two_edu'><h1>2011-2014</h1></div>
                            <div className='t2'></div>
                            <div className='h1_edu2'>

                                <h1 className='edu2'>Diploma</h1>
                                <h1 className='edu2_1'> Zohreh Tehrani High School</h1>
                                <h1 className='edu2_2'>Overall gpa : 19.33/20</h1>
                            </div>

                        </div>
                    </div>
                    <div id='work_page' className='work'>
                        <h1 style={{ borderBottomColor: 'black', borderBottomStyle: 'solid', marginLeft: '100px', paddingTop: '120px ', textAlign: 'center', width: '85%' }}>Work Exprience</h1>
                        <div class="vl">
                            <div >
                                <div className='circle_one'></div>
                                <div className='triangle'></div>
                                <div className='yek'>
                                    <h1 style={{ fontSize: '38px', lineHeight: '50px', fontWeight: 'bold' }}>Internship Trainee</h1>
                                    <h1 style={{ fontSize: '22px' }}>Fanap . Jul2018 - Sep2018</h1>
                                    <h1 style={{ fontSize: '18px' }}> which is one of the Pioneer in Iran
                                    online financial system
</h1>
                                    <h1 style={{ fontSize: '18px' }}>
                                        Started learning Spring Boot framework of Java</h1>

                                </div>
                            </div>
                            <div >
                                <div className='circle_two'></div>
                                <div className='triangle1'></div>
                                <div className='do'><h1 style={{ fontSize: '38px', lineHeight: '50px', fontWeight: 'bold' }}>BackEnd Developer</h1>
                                    <h1 style={{ fontSize: '22px' }}>Awans Startup . Oct2018 - Jan2020</h1>
                                    <h1 style={{ fontSize: '18px' }}> Server Implementor</h1>
                                    <h1 style={{ fontSize: '18px' }}> Developed a system for selling sort of short-term insurances</h1>
                                </div>
                            </div>
                            <div >
                                <div className='circle_three'></div>
                                <div className='triangle2'></div>
                                <div className='se'>   <h1 style={{ fontSize: '38px', lineHeight: '50px', fontWeight: 'bold' }}>Mobile Developer</h1>
                                    <h1 style={{ fontSize: '22px' }}>Awans Startup .Oct 2019 - Jan 2020</h1>
                                    <h1 style={{ fontSize: '18px' }}>Learned Mobile Developing from scratch Self-taught</h1>
                                </div>
                            </div>
                            <div >
                                <div className='circle_four'></div>
                                <div className='triangle3'></div>
                                <div className='char'>   <h1 style={{ fontSize: '38px', lineHeight: '50px', fontWeight: 'bold' }}>BackEnd Developer</h1>
                                    <h1 style={{ fontSize: '22px' }}>Tapsell . Apr2020 - Now</h1>
                                    <h1 style={{ fontSize: '18px' }}> which is the first Smart digital advertising network in Iran as Backend Developer</h1>
                                </div>
                            </div>



                        </div>
                    </div>
                    <div id='skill_page' className='skill'  >

                        <h1 style={{ borderBottomColor: 'black', borderBottomStyle: 'solid', marginLeft: '100px', paddingTop: '120px ', textAlign: 'center', width: '85%' }}>Skills</h1>
                        <h1 style={{ fontSize: '25px', marginLeft: '160px', marginTop: '20px', display: 'none' }} id='title1'>Progamming Language</h1>
                        <div style={{ display: 'none' }} className='row_one' id='row_one'>
                            <div className='java'>
                                <h1>Java</h1>
                                <div className='one' style={{ marginLeft: '100px' }}></div>
                                <div className='two'></div>
                                <div className='three'></div>
                                <div className='four'></div>
                                <div className='five'></div>
                            </div>
                            <div className='kotlin'>
                                <h1>Kotlin</h1>
                                <div className='one' style={{ marginLeft: '40px' }}></div>
                                <div className='two'></div>
                                <div className='three'></div>
                                <div className='four'></div>
                                <div className='five' style={{ backgroundColor: 'rgb(149, 56, 158,0.2)' }}></div>
                            </div>
                            <div className='cpp'>
                                <h1 style={{marginLeft:'165px'}}>C/C++</h1>
                                <div className='one' style={{ marginLeft: '70px' }}></div>
                                <div className='two'></div>
                                <div className='three'></div>
                                <div className='four' style={{ backgroundColor: 'rgb(149, 56, 158,0.2)' }}></div>
                                <div className='five' style={{ backgroundColor: 'rgb(149, 56, 158,0.2)' }}></div>
                            </div>
                        </div>
                        <div style={{ display: 'none' }} className='row_one' id='row_two'>
                            <div className='java'>
                                <h1>Python</h1>
                                <div className='one' style={{ marginLeft: '80px' }}></div>
                                <div className='two'></div>
                                <div className='three'></div>
                                <div className='four' style={{ backgroundColor: 'rgb(149, 56, 158,0.2)' }}></div>
                                <div className='five' style={{ backgroundColor: 'rgb(149, 56, 158,0.2)' }}></div>
                            </div>
                            <div className='kotlin'>
                                <h1>Mathlab</h1>
                                <div className='one' style={{ marginLeft: '20px' }}></div>
                                <div className='two'></div>
                                <div className='three'></div>
                                <div className='four' style={{ backgroundColor: 'rgb(149, 56, 158,0.2)' }}></div>
                                <div className='five' style={{ backgroundColor: 'rgb(149, 56, 158,0.2)' }}></div>
                            </div>
                            <div className='cpp'>
                                <h1 style={{marginLeft:'165px'}}>Assembly</h1>
                                <div className='one' style={{ marginLeft: '40px' }}></div>
                                <div className='two'></div>
                                <div className='three'></div>
                                <div className='four' style={{ backgroundColor: 'rgb(149, 56, 158,0.2)' }}></div>
                                <div className='five' style={{ backgroundColor: 'rgb(149, 56, 158,0.2)' }}></div>
                            </div>
                        </div>
                        <div style={{ display: 'none' }} className='row_one' id='row_three'>
                            <div className='java'>
                                <h1>Verilog</h1>
                                <div className='one' style={{ marginLeft: '83px' }}></div>
                                <div className='two'></div>
                                <div className='three'></div>
                                <div className='four' style={{ backgroundColor: 'rgb(149, 56, 158,0.2)' }}></div>
                                <div className='five' style={{ backgroundColor: 'rgb(149, 56, 158,0.2)' }}></div>
                            </div>
                            <div className='kotlin'>
                                <h1>Vhdl</h1>
                                <div className='one' style={{ marginLeft: '50px' }}></div>
                                <div className='two'></div>
                                <div className='three' style={{ backgroundColor: 'rgb(149, 56, 158,0.2)' }}></div>
                                <div className='four' style={{ backgroundColor: 'rgb(149, 56, 158,0.2)' }}></div>
                                <div className='five' style={{ backgroundColor: 'rgb(149, 56, 158,0.2)' }}></div>
                            </div>

                        </div>

                        <h1 style={{ fontSize: '25px', marginLeft: '160px', marginTop: '50px', display: 'none' }} id='title2' >Framework and Tecnical Program</h1>
                        <div style={{ display: 'none' }} className='row_one' id='row_four'>
                            <div className='intelij'>
                                <h1 >IntelijIDE</h1>
                                <div className='one' style={{ marginLeft: '53px' }}></div>
                                <div className='two'></div>
                                <div className='three'></div>
                                <div className='four'></div>
                                <div className='five'></div>
                            </div>
                            <div className='spring'>
                                <h1>Spring</h1>
                                <div className='one' style={{ marginLeft: '77px' }}></div>
                                <div className='two'></div>
                                <div className='three'></div>
                                <div className='four'></div>
                                <div className='five'></div>
                            </div>
                            <div className='cpp'>
                                <h1>MySql</h1>
                                <div className='one' style={{ marginLeft: '120px' }}></div>
                                <div className='two'></div>
                                <div className='three'></div>
                                <div className='four' ></div>
                                <div className='five' ></div>
                            </div>
                        </div>
                
                    
                        <div style={{ display: 'none' }} className='row_one' id='row_five'>
                        <div className='cpp'  style={{marginLeft:'150px'}}>
                                <h1>MongoDB</h1>
                                <div className='one' style={{ marginLeft: '46px' }}></div>
                                <div className='two'></div>
                                <div className='three'></div>
                                <div className='four' ></div>
                                <div className='five' style={{ backgroundColor: 'rgb(149, 56, 158,0.2)' }}></div>
                            </div>
                            <div className='spring'>
                                <h1>WebStorm</h1>
                                <div className='one' style={{ marginLeft: '40px' }}></div>
                                <div className='two'></div>
                                <div className='three'></div>
                                <div className='four'></div>
                                <div className='five' style={{ backgroundColor: 'rgb(149, 56, 158,0.2)' }}></div>
                            </div>
                            <div className='spring'>
                                <h1>Hibernate</h1>
                                <div className='one' style={{marginLeft:'90px'}}></div>
                                <div className='two'></div>
                                <div className='three'></div>
                                <div className='four'></div>
                                <div className='five' style={{ backgroundColor: 'rgb(149, 56, 158,0.2)' }}></div>
                            </div>
                            
                        </div>
                    
                        <div style={{ display: 'none' }} className='row_one' id='row_six'>
                        <div className='cpp'  style={{marginLeft:'150px'}}>
                                <h1>Git</h1>
                                <div className='one' style={{ marginLeft: '110px' }}></div>
                                <div className='two'></div>
                                <div className='three'></div>
                                <div className='four' ></div>
                                <div className='five' style={{ backgroundColor: 'rgb(149, 56, 158,0.2)' }}></div>
                            </div>
                            <div className='spring'>
                                <h1>ReactNative</h1>
                                <div className='one' style={{ marginLeft: '27px' }}></div>
                                <div className='two'></div>
                                <div className='three'></div>
                                <div className='four'></div>
                                <div className='five' style={{ backgroundColor: 'rgb(149, 56, 158,0.2)' }}></div>
                            </div>
                            <div className='spring'>
                                <h1>React</h1>
                                <div className='one' style={{ marginLeft: '123px' }}></div>
                                <div className='two'></div>
                                <div className='three'></div>
                                <div className='four' style={{ backgroundColor: 'rgb(149, 56, 158,0.2)' }}></div>
                                <div className='five' style={{ backgroundColor: 'rgb(149, 56, 158,0.2)' }}></div>
                            </div>
                          
                        </div>
                        <div style={{ display: 'none' }} className='row_one' id='row_seven'>
                        <div className='cpp'  style={{marginLeft:'150px'}}>
                                <h1>Android</h1>
                                <div className='one' style={{ marginLeft: '65px' }}></div>
                                <div className='two'></div>
                                <div className='three'></div>
                                <div className='four' style={{ backgroundColor: 'rgb(149, 56, 158,0.2)' }}></div>
                                <div className='five' style={{ backgroundColor: 'rgb(149, 56, 158,0.2)' }}></div>
                            </div>
                            <div className='spring'>
                                <h1>Socket</h1>
                                <div className='one' style={{ marginLeft: '74px' }}></div>
                                <div className='two'></div>
                                <div className='three'></div>
                                <div className='four' style={{ backgroundColor: 'rgb(149, 56, 158,0.2)' }}></div>
                                <div className='five' style={{ backgroundColor: 'rgb(149, 56, 158,0.2)' }}></div>
                            </div>
                            <div className='spring'>
                                <h1>Ubunto</h1>
                                <div className='one' style={{ marginLeft: '110px' }}></div>
                                <div className='two'></div>
                                <div className='three'></div>
                                <div className='four' style={{ backgroundColor: 'rgb(149, 56, 158,0.2)' }}></div>
                                <div className='five' style={{ backgroundColor: 'rgb(149, 56, 158,0.2)' }}></div>
                            </div>
                          
                        </div>
                        <div style={{ display: 'none' }} className='row_one' id='row_eight'>
                        <div className='cpp'  style={{marginLeft:'150px'}}>
                                <h1>Arm</h1>
                                <div className='one' style={{ marginLeft: '100px' }}></div>
                                <div className='two'></div>
                                <div className='three' style={{ backgroundColor: 'rgb(149, 56, 158,0.2)' }}></div>
                                <div className='four' style={{ backgroundColor: 'rgb(149, 56, 158,0.2)' }}></div>
                                <div className='five' style={{ backgroundColor: 'rgb(149, 56, 158,0.2)' }}></div>
                            </div>
                            <div className='spring'>
                                <h1>Prossecor Avr</h1>
                                <div className='one' ></div>
                                <div className='two'></div>
                                <div className='three' style={{ backgroundColor: 'rgb(149, 56, 158,0.2)' }}></div>
                                <div className='four' style={{ backgroundColor: 'rgb(149, 56, 158,0.2)' }}></div>
                                <div className='five' style={{ backgroundColor: 'rgb(149, 56, 158,0.2)' }}></div>
                            </div>
                            <div className='spring'>
                                <h1>elastic & kibana</h1>
                                <div className='one' style={{ marginLeft: '32px' }}></div>
                                <div className='two'></div>
                                <div className='three'></div>
                                <div className='four' style={{ backgroundColor: 'rgb(149, 56, 158,0.2)' }}></div>
                                <div className='five' style={{ backgroundColor: 'rgb(149, 56, 158,0.2)' }}></div>
                            </div>
                          
                        </div>
                        <div style={{ display: 'none' }} className='row_one' id='row_nine'>
                        <div className='cpp' style={{marginLeft:'150px'}}>
                                <h1>Kafka</h1>
                                <div className='one' style={{ marginLeft: '87px' }}></div>
                                <div className='two'></div>
                                <div className='three' style={{ backgroundColor: 'rgb(149, 56, 158,0.2)' }}></div>
                                <div className='four' style={{ backgroundColor: 'rgb(149, 56, 158,0.2)' }}></div>
                                <div className='five' style={{ backgroundColor: 'rgb(149, 56, 158,0.2)' }}></div>
                            </div>
                        
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}
export default Landing