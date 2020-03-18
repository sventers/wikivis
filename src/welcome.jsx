import React from "react";
import Destination from './destination.jsx';

export default class WelcomePage extends React.Component {
  render() {
    return (
      <div className='container'>
        <h1>Welcome to the Code Galaxies, Commander</h1>
        <h2>Choose your destination:</h2>
        <div className='media-list'>

          <Destination description='Bullshit world'
                      href='#/galaxy/Jean_Hoerni?l=1'
                      name='bs'/>

          <Destination description='Client side JavaScript package manager'
                      href='#/galaxy/bower?l=1'
                      media='bower_fly_first.png'
                      name='Bower'/>

          <Destination description='Package manager for PHP'
                      href='#/galaxy/composer?l=1'
                      media='composer_fly_first.png'
                      name='Composer'/>

          <Destination description='Package manager for Ruby'
                      href='#/galaxy/rubygems?l=1'
                      media='ruby_fly_first.png'
                      name='RubyGems'/>

          <Destination description='JavaScript package manager'
                      href='#/galaxy/npm?cx=-1345&cy=-7006&cz=-6553&lx=0.621700613972938&ly=-0.6458651572907126&lz=0.30983196944957914&lw=0.31678177960626197&l=1'
                      media='npm_fly_first.png'
                      name='npm'/>

          <Destination description='Packages from Go language (based on go-search.org)'
                      href='#/galaxy/gosearch?l=1'
                      media='go_fly_first.png'
                      name='Go Search'/>

          <Destination description='Python Package Index'
                      href='#/galaxy/python?cx=-2700&cy=377&cz=5622&lx=-0.0869&ly=-0.2315&lz=-0.0338&lw=0.9684&ml=150&s=1.75&l=1&v=2015-09-27T13-00-00Z'
                      media='composer_fly_first.png'
                      name='Python (PyPI)'/>


        </div>
      </div>
    );
  }
}
