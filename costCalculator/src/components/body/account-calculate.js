var total = {
      Position: {
          shares: 1000,
          equity: 2500
      },
      oldPosition: {
          shares: 1358,
          equity: 4202.90
      }
      
  };

exports.updateNewShares = function(newShares) {
    return newShares + total.oldPosition.shares;
};
exports.updateNewEquity = function(newEquity) {
    total.Position.equity = newEquity + total.oldPosition.equity;
};

exports.GetTotal = function(positions) {
    const totReturn = positions.shares * positions.avgCost;
    const totEquity = positions.shares * positions.liveShare;
    return  {
            todayReturn     : totEquity - totReturn,
            todayReturnPerc : 100 - (totEquity / totReturn * 100),
            totalReturn     : totReturn,
            totalEquity     : totEquity
    };
}
exports.GetNewTotal = function(position) {
    console.log(position)
    return {
        shares: parseInt(position.shares) + total.Position.shares
    }
};
exports.position = total.Position;