## componentDidMount() method in react js :

1. The componentDidMount() method allows us to execute the React code when the component is already placed in the DOM (Document Object Model).

## (this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.pageSize) : 

the literal meaning of this line is :

* (this.state.page + 1)

   1+1 / 2+1 / 3+1 / 4+1 / 5+1 / 6+1 ...........

* (this.state.totalResults/this.props.pageSize)
this.state.totalResults=70
this.props.pageSize=15
therefore, 70/15=4.6

* Math.ceil(4.6)= 5

now , when 2>5 3>5 4>5 5>5, these all are satisfying else condition.And therefore our NEWSMONKEY contains only 4 pages and after that the next button gone be diabled.

and 6>5 7>5 8>5 ........,these all are satisfying if condition.
            
