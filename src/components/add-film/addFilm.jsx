import { Button, Form, Input } from "antd";
import TextArea from "antd/lib/input/TextArea";
import React from "react";
import { Modal } from "react-bootstrap";
import  uuid from 'react-uuid';

const AddFilm = ({show, handleClose, addFilm}) =>{


    const onFinish = (newFilm) =>{
      const film = {
       ...newFilm,
        episode_id: uuid(),
      }
      addFilm(film);
      handleClose();
    }


    return (
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Film</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form
            onFinish={onFinish}
            name="Add Form"
            labelCol={{
              span: 8,
            }}
            wrapperCol={{
              span: 16,
            }}
          >
            <Form.Item
              label="Name"
              name="title"
              rules={[
                {
                  required: true,
                  message: "Please input your Film!",
                },
              ]}
            >
              <Input className="w-100" />
            </Form.Item>

            <Form.Item
              label="Year of Release"
              name="release_date"
              rules={[
                {
                  required: true,
                  message: "Please input year!",
                },
              ]}
            >
              <Input className="w-100" />
            </Form.Item>

            <Form.Item
              label="Director"
              name="director"
              rules={[
                {
                  required: true,
                  message: "Please input your Film!",
                },
              ]}
            >
              <Input className="w-100" />
            </Form.Item>

            <Form.Item
              label="Producer"
              name="producer"
              rules={[
                {
                  required: true,
                  message: "Please input your Film!",
                },
              ]}
            >
              <Input className="w-100" />
            </Form.Item>

            <Form.Item
              label="Descriptions"
              name="opening_crawl"
              rules={[
                {
                  required: true,
                  message: "Please input your Descriptions!",
                },
              ]}
            >
              <TextArea rows={4} className="w-100 d-flex" />
            </Form.Item>

            <Form.Item
              wrapperCol={{
                offset: 8,
                span: 16,
              }}
            >
              <Button variant="success" htmlType="submit">
              Add
              </Button>
            </Form.Item>
          </Form>
        </Modal.Body>
      </Modal>
    );
}


export default AddFilm