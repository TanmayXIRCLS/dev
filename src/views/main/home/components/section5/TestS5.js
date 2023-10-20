import React from 'react'
import { Card, CardBody, Col, Row } from 'reactstrap'
import { AiOutlineArrowRight } from 'react-icons/ai'
import './test.scss'


export default function TestS5() {
    const companyDetails = [
        {
            name: "BADMAASH",
            logo: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Jzc/Oz8tP0A5ODIBCgoKDQ0NFQ8PGisdEx0rKysrKystLSsrKysrKysrKysrKzcrKysrKysrKysrKysrKysrKysrKysrKysrKysrK//AABEIAB4AHgMBIgACEQEDEQH/xAAZAAACAwEAAAAAAAAAAAAAAAAEBgEDBwX/xAAyEAABAwIDAwkJAQAAAAAAAAABAgMEBREABhIWITEVIkFCUVWRlNITJTRSYXGTobEU/8QAFAEBAAAAAAAAAAAAAAAAAAAAAP/EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAMAwEAAhEDEQA/ANbq2YabSHW2ZrykuumyUpaWsk2v1QcCbY0j55PlHfThfz05KZzDTnaWCuYHTpR7IrBOgeG7FHKueL/ADyhwDPtjR773JAHSf8j3ox1adU4VTbLkJ9LqQbHcQRw4g7xxwm0yfnB+ey3LpzZjKWA6VsaAlN95vbsxXmFKqZmdPITSW5jkLU6ywNIUC4dSyBa5uALnARn2O5Nr9OjRXEMSFOEJeUtQtzB2X/mBdlq738x+Vfpw/VKjU2qFBqENt8oN06+jAOx+Xu6Y/gcAr06g1iFOakyMwNBlpYUsJUVa0jiLFNhu7MTV3UZhzD7nfSCxG9m5L6upKzdv784HDQMn5eHCkx930ODnKXAXDRGcioLCCClu24ECw/WA/9k=",
            personName: "Nikhil Jain",
            role: "Co-founder & CEO",
            desc: "A very good app in terms of collaborative marketing. Something new and unique and helps us spend lesser money than we are used to. The team is very good support wise and follow up wise. Harshitha from the team is in touch with us, and she's like fire, always behind us to plan something or the other. Overall a great platform! Cheers to this great work guys"
        },
        {
            name: "A Diabetic Chef",
           logo:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAARCAYAAAC8XK78AAADq0lEQVR4AY2UA4xlSRSGz1Nz2Nb66lTd+9ruXtu2bduMNlpb4doK1t4N1o6Gsc35Kl2VMV7y5T8+dfXEGpU0jcVoBhp0C6yP01MGsap3G5Pd4Wwob7vf57xqlorrk8IaiZOoRLCJZCMKugVCnDoa0TYGfA8/YS/lIEK+eX3dtmekaVLK2S1FbtsIjEFOErJtYakZzq0KhzgL5x9rsr+Inepi6Iiv2UKvbqgWRovctAnW7CmHHb7DjwClBzX6Jfow/iPop9vv9znfPzw0WEanRbOs7hMViiArO4WSs70vPlb2yxdz5afm2BawTyfXYgsjvodaFIA56gizQ57d6bgQyEGgxLBwQlhv+yHi4LcQC2QJfrZgq1OPbqjqe8I8DoHChCsoQBRInoR9PnomNGPHaOybzobl/lDnw3kMmGH5UuyrGH4ajJA/Cb0FPRIdt6o91C2h5hz8i9Bh6x8FuANoAc5pJHkF2oQOAQN1f4pn0GZ4kmHTLGz0CwaIXUmdUnMulMjXyLlDXosKHEF8irpzqUuIt6K7R8b4O6brD+A/jzPDbaLgFAYeQyzFPhaOI345LKbmfuInYp8LEYd6gEUs0xZyNXLngsBe5NydOIE6CeBXtnAHtNHdSoLt6DyNJ2LPs/gIuBH7ABpvxj6IZRf6R3EJOP8s/MVWtZmaZuzLUYHDiY1TcxYMQwd+NujfF1j/DsQpA2nAPpPCYyisYfeycDq8B9idMMzgk/zVz9Gz2NnEXB93Ky1hT/kDpthd/uJOBurUouHlnNjkK1j/nVoF56MU+jjqwfZkQbfA+r4Nob8CKHeAOzLkirIsFjV74O9KIqawgCQ0nAofMPQudIDY3aig5xGbRc9F30QfhBz7aXgF+2iQhbsSiZsf540Sx7uLLvwPTAjVkxQts8ZUrdqaNYDiN/kX8gj4hUMebFXvZ/E8d+VPFiwh/g6c45c9Tq6OfSD6DxwKuyWmQ5jZABvMtlXmtZEfk8F63uTfg0FjAPX2OI+wjRfsYRbeEm6fqmnB/5/4xwxYC0ex9Cn0O+LHWXrRlfgvQQezdmPWSJgdVNlJXaPUi1wolI6dRXa2ZelTkQFQE4W/3b3RP2g6n+YX8A+A32IthPhrLD8XfQV9CfbFPgL9jhrhMBUxzNWa9DOzD3bjEfALX4G4RyAUl3aNOiQ23RJplwO7hwWmRBGDdB/0BYZfSG0begEq6FFQh8PhEbiL5Tl6SngJm1WYF+Z2SmJ7pbO/6paXNMtkHd5CVg/uT/bmAAAAAElFTkSuQmCC",
            personName: "Harsh Kedia",
            role: "Founder",
            desc: "The famous proverb: 'Necessity is the mother of invention', aptly applies to Chef Harsh Kedia. Diagnosed with type 1.5 Diabetes as a teenager, Harsh was told he would have to give up chocolates. But that wasn't going to stop him!"
        },
        {
            name: "BeYours",
            logo:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgBAMAAACBVGfHAAAAMFBMVEVHcEwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlTPQ5AAAAEHRSTlMADVySo8FLyZw7Kv/igRuk3I0YWAAAAMdJREFUeAFl0iVCoGEYBOBn7WfTKu5OxaHhFdeENRwqDmfgEDTcoeG34CK4f+11mRngS059ffEfAL629xPfkAkQTQEFfYBlgErgRx9A1Ax6AFiBn30ARAsYhNVkoBwTMD18CWL4mgnTiYeZPHo/wLSUddAsFkyLjkGNfDDNNhhQBKZv7IL/qj1t2dwE318CX69PPgai58BvLy17Ly0vQ22D/8Ha4LDg9Jfn/r885+X9MxATAhRAGIAc0BAQFVAZkP0ih6YXOdwBh7MvkgxDkssAAAAASUVORK5CYII=",
            personName: "Nilesh Karnani & Ashish Baheti",
            role: "Co-founder",
            desc: "XIRCLS is disrupting the marketing industry through collaborative marketing, while helping all brands to increase their reach & sales."
        }
    ]
    return (
        <div className='mt170 p-5 testimonials ' >
            <div className='w-75 m-auto py-5'>
                <h1 className='display-3 text-center text-white fw-bolder'>Testimonials</h1>
                <Row className='mt-4 match-height '>
                    {
                        companyDetails.map((data) => {
                            return (
                                <Col md="4">
                                    <Card className='position-relative box py-1'>
                                        <CardBody >
                                            <div className='d-flex justify-content-start align-items-center mb-5'>
                                                <div className='bg-secondary rounded-circle d-flex justify-content-center align-items-center ' style={{ minWidth: '50px', height: '50px', overflow: "hidden" }}><img style={{ transform: "scale(1.5)" }} src={data.logo} /></div>
                                                <div>
                                                    <h2 className='m-0 ms-2 text-white'>{data.name}</h2>
                                                    <h4 className='m-0 ms-2 text-white'>{data.personName} , <span>{data.role}</span></h4>

                                                </div>
                                            </div>
                                            <div className='mt-' style={{marginTop:"170px"}}>

                                                    <h2 className='text-white fw-bold '>{data.desc.slice(0, 150)}...
                                                    </h2>
                                            </div>
                                        </CardBody>
                                        <div className='position-absolute end-0 bottom-0 me-2 mb-1'>
                                            <a className='fs-5 text-primary' > Read More <AiOutlineArrowRight /></a>

                                        </div>
                                    </Card>
                                </Col>
                            )
                        })
                    }


                </Row>
            </div>
        </div>
    )
}
