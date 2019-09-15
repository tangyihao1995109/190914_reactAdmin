import React, {Component} from 'react';
import {Form, Icon, Input, Button, Checkbox} from 'antd';

import './login.less'
import logo from './images/logo.png'

class Login extends Component {
    render() {
        // 得到具有强大功能的form对象
        const form = this.props.form;
        const {getFieldDecorator} = form;
        return (
            <div className="login">
                <header className="login-header">
                    <img src={logo} alt="logo"/>
                    <h1>React项目：后台管理系统</h1>
                </header>
                <section className="login-content">
                    <h2>用户登录</h2>
                    <Form onSubmit={this.handleSubmit} className="login-form">
                        <Form.Item>
                            {getFieldDecorator('username', {
                                rules: [
                                    {required: true, message: '用户名必须输入'},
                                    {min: 4, message: '用户名至少4位'},
                                    {max: 12, message: '用户名最多12位'},
                                    {pattern: /^[a-zA-Z0-9_]+$/, message: '用户名必须是英文，数字或下划线组成'}
                                ],
                            })(
                                <Input
                                    prefix={<Icon type="user" style={{color: 'rgba(0,0,0,.25)'}}/>}
                                    placeholder="用户名"
                                />,
                            )}
                        </Form.Item>
                        <Form.Item>
                            {getFieldDecorator('password', {
                                rules: [
                                    {required: true,  message: '用户名必须输入'},
                                    {min: 4, message: '用户名至少4位'},
                                    {max: 12, message: '用户名最多12位'},
                                    {pattern: /^[a-zA-Z0-9_]+$/, message: '用户名必须是英文，数字或下划线组成'}
                                ],
                            })(
                                <Input
                                    prefix={<Icon type="lock" style={{color: 'rgba(0,0,0,.25)'}}/>}
                                    type="password"
                                    placeholder="密码"
                                />,
                            )}

                        </Form.Item>
                        <Form.Item>
                            <Button type="primary" htmlType="submit" className="login-form-button">
                                登录
                            </Button>
                        </Form.Item>
                    </Form>
                </section>
            </div>
        );
    }

    handleSubmit = (event) => {
        // 阻止事件的默认行为
        event.preventDefault();

        // 对所有表单字段进行验证
        this.props.form.validateFields((err, values) => {
            // 校验成功
            if (!err) {
                console.log('提交登录的ajax请求', values);
            } else {
                console.log('校验失败！')
            }
        });
    }
}

const WrapLogin = Form.create()(Login);

export default WrapLogin;
