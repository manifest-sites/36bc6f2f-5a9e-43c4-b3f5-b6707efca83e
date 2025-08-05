import { useState } from 'react'
import { Button, Input } from 'antd'
import { PlusOutlined, MinusOutlined, ReloadOutlined } from '@ant-design/icons'

function Scoreboard() {
  const [team1Score, setTeam1Score] = useState(0)
  const [team2Score, setTeam2Score] = useState(0)
  const [team1Name, setTeam1Name] = useState('Team 1')
  const [team2Name, setTeam2Name] = useState('Team 2')

  const incrementScore = (team) => {
    if (team === 1) {
      setTeam1Score(team1Score + 1)
    } else {
      setTeam2Score(team2Score + 1)
    }
  }

  const decrementScore = (team) => {
    if (team === 1 && team1Score > 0) {
      setTeam1Score(team1Score - 1)
    } else if (team === 2 && team2Score > 0) {
      setTeam2Score(team2Score - 1)
    }
  }

  const resetScores = () => {
    setTeam1Score(0)
    setTeam2Score(0)
  }

  return (
    <div className="min-h-screen bg-black p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header with team name inputs, control buttons, and reset */}
        <div className="mb-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2">
            <Button
              type="primary"
              icon={<MinusOutlined />}
              onClick={() => decrementScore(1)}
              size="middle"
              className="bg-red-600 hover:bg-red-700 h-8 w-8 min-w-0 flex items-center justify-center"
              disabled={team1Score === 0}
            />
            <Input
              value={team1Name}
              onChange={(e) => setTeam1Name(e.target.value)}
              className="text-center text-lg font-bold max-w-xs"
              placeholder="Team 1 Name"
            />
            <Button
              type="primary"
              icon={<PlusOutlined />}
              onClick={() => incrementScore(1)}
              size="middle"
              className="bg-green-600 hover:bg-green-700 h-8 w-8 min-w-0 flex items-center justify-center"
            />
          </div>
          <Button
            type="primary"
            icon={<ReloadOutlined />}
            onClick={resetScores}
            size="large"
            className="bg-green-600 hover:bg-green-700"
          >
            Reset
          </Button>
          <div className="flex items-center gap-2">
            <Button
              type="primary"
              icon={<MinusOutlined />}
              onClick={() => decrementScore(2)}
              size="middle"
              className="bg-red-600 hover:bg-red-700 h-8 w-8 min-w-0 flex items-center justify-center"
              disabled={team2Score === 0}
            />
            <Input
              value={team2Name}
              onChange={(e) => setTeam2Name(e.target.value)}
              className="text-center text-lg font-bold max-w-xs"
              placeholder="Team 2 Name"
            />
            <Button
              type="primary"
              icon={<PlusOutlined />}
              onClick={() => incrementScore(2)}
              size="middle"
              className="bg-green-600 hover:bg-green-700 h-8 w-8 min-w-0 flex items-center justify-center"
            />
          </div>
        </div>

        {/* Main scoreboard display */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          {/* Team 1 */}
          <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 text-center border border-white/20">
            <h2 className="text-2xl md:text-4xl font-bold text-white mb-4 truncate">
              {team1Name}
            </h2>
            <div className="text-9xl md:text-[12rem] lg:text-[16rem] font-bold text-white leading-none">
              {team1Score}
            </div>
          </div>

          {/* Team 2 */}
          <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 text-center border border-white/20">
            <h2 className="text-2xl md:text-4xl font-bold text-white mb-4 truncate">
              {team2Name}
            </h2>
            <div className="text-9xl md:text-[12rem] lg:text-[16rem] font-bold text-white leading-none">
              {team2Score}
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Scoreboard