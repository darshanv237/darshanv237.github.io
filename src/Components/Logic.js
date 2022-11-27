let prev_id=' '
export function handleClick(event){
    event.currentTarget.classList.toggle('link_active')
    let curr_id=event.currentTarget.id;
    if(prev_id!=' ')
      document.getElementById(prev_id).classList.remove('link_active');
    prev_id = curr_id
    if(curr_id.includes('_active'))
      document.getElementById('offcanvas_close').click();
    }

