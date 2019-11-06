class LoggingButton extends React.Component {
    handleClick() {
        document.querySelector('body').classList.toggle("dark");
    }
    render() {
      return (
        <button onClick={(e) => this.handleClick(e)} className="switch" type="button" data-dark="🌙" data-light="🌞" title="Theme">
            <span className="ht">Switch</span>
        </button>
      );
    }
}
export default () => (
    <aside className="_ Aside _">
        <a href="https://codepen.io/co0kie" target="_blank" rel="noreferrer" className="💩 Aside-link">codepen</a>
        <a href="https://www.youtube.com/channel/UCZnuUnd4XeKxfuTPFFs9OBA?view_as=subscriber" target="_blank" rel="noreferrer" className="📺 Aside-link">youtube</a>
        <LoggingButton />
    </aside>
)
