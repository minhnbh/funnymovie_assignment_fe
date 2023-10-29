import React, { useState } from "react";
import { Container, ShareCard, ShareForm } from "./styles";
import { Typography, Form, Input, Button, Row, Col, notification } from "antd";
import { ShareServices } from "@services/share.service";

const Share: React.FC = () => {
  const [value, setValue] = useState("");
  const [loading, setLoading] = useState(false);

  const onSubmit = async () => {
    try {
      setLoading(true);
      await ShareServices.share(value);
      notification.success({
        message: "Share successfully",
      });
      setValue("");
    } catch (error) {
      notification.success({
        message: "Something went wrong",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container>
      <ShareCard>
        <Typography.Title level={3}>Share a Youtube movie</Typography.Title>
        <ShareForm>
          <Row>
            <Col span={6}>
              <Typography.Text>Youtube URL:</Typography.Text>
            </Col>
            <Col span={15}>
              <Form.Item>
                <Input
                  value={value}
                  aria-label="youtubeUrl"
                  onChange={(e) => setValue(e.target.value)}
                />
              </Form.Item>
              <Form.Item>
                <Button
                  type="primary"
                  block
                  onClick={onSubmit}
                  disabled={loading}
                >
                  Share
                </Button>
              </Form.Item>
            </Col>
          </Row>
        </ShareForm>
      </ShareCard>
    </Container>
  );
};

export default Share;
