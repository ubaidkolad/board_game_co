import React from 'react'
import Timer from './components/Timer'
import MainGame from './components/MainGame'
import { Container } from 'react-bootstrap'

export default function Game() {
    return (
        <>
        <Container>

        <Timer></Timer>
        <MainGame></MainGame>
        </Container>
        </>
    )
}
