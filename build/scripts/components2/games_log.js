define(["lib/react","lib/clib"],function(e,t){var n=e.DOM;return e.createClass({displayName:"gamesLog",propTypes:{engine:e.PropTypes.object.isRequired},componentWillMount:function(){this.maxGamesShowed=10},gameDetails:function(e){return function(){window.open("/game/"+e,"_blank")}},render:function(){var e=[],r=this.props.engine.tableHistory,i,s,o;for(var u=0;u<this.maxGamesShowed;u++){var a=r[u].player_info[this.props.engine.username];a?(s=t.formatSatoshis(a.bet),a.stopped_at?(o=t.formatSatoshis(a.stopped_at/100*a.bet-a.bet),i=t.formatSatoshis(a.stopped_at)):(o=t.formatSatoshis(-a.bet),i="-"),a.bonus&&(o=o+" (+"+t.formatSatoshis(a.bonus)+")")):(i="-",s="-",o="-"),e.push(n.tr({key:"game_"+u,onClick:this.gameDetails(r[u].game_id)},n.td(null,t.formatSatoshis(r[u].game_crash),n.i(null,"x")),n.td(null,i),n.td(null,s),n.td(null,o)))}return n.table({className:"games-log"},n.thead(null,n.tr(null,n.th(null,"Crash"),n.th(null,"@"),n.th(null,"Bet"),n.th(null,"Profit"))),n.tbody(null,e))}})});