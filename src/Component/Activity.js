import React, { Component } from 'react';
import { CSSTransitionGroup } from 'react-transition-group';
import '../Style/Activity.css';
import Header from './Header';
import RcLogo from '../Image/RcLogo.png';


class Activity extends Component {

    state = {
        todos: [],
        error: ''
    }

    addTodo = (e) => {
        e.preventDefault();

        let jam = this.refs.jamInput.value;
        let aktivitas = this.refs.aktivitasInput.value;
        let dataHarian = { jam, aktivitas }
        if (jam.length > 4) {
            if (jam === '' || aktivitas === '') {
                this.setState({ error: 'Mohon input datanya dengan benar!' })
            } else {
                this.state.todos.push(dataHarian)
                this.setState({ todos: this.state.todos })
                this.setState({ error: '' })

                this.refs.formulir.reset();
                this.refs.jamInput.focus();
            }
        } else {
            this.setState({ error: 'Format jam tidak sesuai!' })
        }
    }

    deleteTodo = (index) => {
        // if (window.confirm('Anda yakin menghapus aktifitas ini?'))
        this.state.todos.splice(index, 1);
        this.setState({ todos: this.state.todos })

        this.refs.formulir.reset();
        this.refs.jamInput.focus()
    }

    render() {
        return (
            <div>
                <img src={RcLogo} alt="RcLogo"/>
                <h3>Aplikasi Aktivitas Harian</h3>
                <Header />
                <form className="form-inline" ref="formulir" >
                    <input className="form-control" type="text" maxLength="5" ref="jamInput" placeholder="jam aktivitias" />
                    <input className="form-control" type="text" ref="aktivitasInput" placeholder="jenis aktivitas" />
                    <button className="btn btn-info" onClick={this.addTodo}>Simpan</button>
                    <div className="contohJam">Contoh: 07:00</div>
                </form>
                <div className={this.state.error ? "alert" : "alertMargin"}>{this.state.error ? this.state.error : ''}</div>
                <div className={this.state.todos.length === 0 ? "" : "isiList"}>
                    <CSSTransitionGroup
                        transitionName="animasi"
                        transitionEnter={true}
                        transitionEnterTimeout={1000}
                        transitionLeave={true}
                        transitionLeaveTimeout={500}
                    >
                        {this.state.todos.map((item, index) =>
                            <li key={index}>
                                <button className="btn btn-outline-danger btn-sm" onClick={() => this.deleteTodo(index)}>Hapus</button>
                                {item.jam} : {item.aktivitas}
                            </li>
                        )}
                    </CSSTransitionGroup>
                </div>
            </div>
        );
    }
}

export default Activity;