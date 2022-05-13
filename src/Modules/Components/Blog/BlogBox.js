import React from "react";
import { motion } from "framer-motion";
import { Card, Button, Container, Row, Col } from "react-bootstrap";
import { useState, useEffect } from "react";
import useHttp from "../../hooks/useHttp";

export default function BlogBox() {

    const [blogList, setBlogList] = useState([])

    const generate = () => {
        const num = parseInt(Math.random() * 1000);
        return num;
    }


    const { isLoading, error, setError, sendRequest: findBlogs } = useHttp();

    const getBlogs = (response) => {
        console.log(response)
        console.log(response.body)
        setBlogList(response.body)
        console.log(blogList)
    };

    useEffect(() => {
        findBlogs(
            {
                url: `https://topspeedstarsmongo.herokuapp.com/api/v1/blog`,
                method: "GET",
                auth: false,
            },
            getBlogs
        );
    }, []);

    return (

        <Container>
            <Row>
                {
                    blogList.map((blog) => (
                        <Col className='m-3' mr='auto'>
                            <Card style={{ width: "35rem", height: "35em" }}>
                                {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
                                <motion.img whileHover={{ scale: 1.1 }} className="img-fluid" src={`https://picsum.photos/id/${generate()}/900/500`} alt="" />
                                <Card.Body>
                                    <Card.Title>{blog.title}</Card.Title>
                                    <Card.Text>
                                        {blog.text}
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))
                }
            </Row>
        </Container>
    );
}
