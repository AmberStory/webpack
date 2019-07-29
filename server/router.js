function route(handle, pathName) {
  if (typeof handle[pathName] === 'function') {
    return handle[pathName]();
  } else {
    console.log('no request for ', handle[pathName]);
    return 'NOT FOUND';
  }
}

exports.route = route;