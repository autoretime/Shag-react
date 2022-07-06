import React, { useEffect } from "react";
import { Modal } from "react-bootstrap";
import { Form, Input, Button} from 'antd';
import TextArea from "antd/lib/input/TextArea";

const UpdateCardEl = ({show, handleClose ,activeFilm , updateFilm}) => {

    const [form] = Form.useForm()

    useEffect(() => {
          form.setFieldsValue({
            title:activeFilm.title,
            release_date:activeFilm.release_date,
            opening_crawl:activeFilm.opening_crawl,
            producer:activeFilm.producer,
            director:activeFilm.director,
          })
    }, [activeFilm , form])

    const onFinish = newFilm => {
      const film = {
        ...newFilm,
        episode_id: activeFilm.episode_id
      }
      updateFilm(film)
      handleClose()
    }


    return (
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Update film</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form
            onFinish={onFinish}
            form={form}
            name="updateForm"
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
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            </Form.Item>
          </Form>
        </Modal.Body>
      </Modal>
    );
}

export default UpdateCardEl